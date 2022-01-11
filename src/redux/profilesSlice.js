import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  profilesList: [],
  selectedProfile: { layout: [] },
  staticProfileCopy: { layout: [] },
  viewDimensions: { width: 0, height: 0 },
  fetchProfilesStatus: 'idle',
  fetchProfilesError: null,
};

// Fetch locally stored profiles
export const fetchProfiles = createAsyncThunk(
  'profiles/fetchProfiles',
  async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('profiles');
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (err) {
      throw err;
    }
  },
);

// Create a new profile and store it locally
export const createProfile = createAsyncThunk(
  'profiles/createProfile',
  async ({ name }, { getState }) => {
    try {
      const profilesList = getState().profiles.profilesList;
      const isProfilesListNull = profilesList == null;

      // Remove leading and trailing spaces from name and check if its empty or already exists
      adjustedName = name.replace(/^\s+|\s+$/g, '');

      if (adjustedName == null || adjustedName == '')
        throw 'Please provide a name for your profile';

      if (
        !isProfilesListNull &&
        profilesList.find(profile => profile.name == name)
      )
        throw 'A saved profile already has the same name';

      const profileID = uuidv4();
      const newProfile = { id: profileID, name, layout: [] };
      const updatedProfilesList = [newProfile, ...profilesList];

      await AsyncStorage.setItem(
        'profiles',
        JSON.stringify(updatedProfilesList),
      );
      return updatedProfilesList;
    } catch (err) {
      throw err;
    }
  },
);

// Delete a given profule using its id
export const deleteProfile = createAsyncThunk(
  'profiles/deleteProfile',
  async ({ profileId }, { getState }) => {
    try {
      const updatedProfilesList = [...getState().profiles.profilesList];
      const profileIndex = getState().profiles.profilesList.findIndex(
        profile => profile.id == profileId,
      );

      if (profileIndex == -1) throw 'Profile with the given ID was not found';

      updatedProfilesList.splice(profileIndex, 1);

      await AsyncStorage.setItem(
        'profiles',
        JSON.stringify(updatedProfilesList),
      );
      return updatedProfilesList;
    } catch (err) {
      throw err;
    }
  },
);

// Edit the layout of an existing profile
export const updateLayout = createAsyncThunk(
  'profiles/updateLayout',
  async ({ id, newLayout }, { getState }) => {
    try {
      const updatedProfilesList = [...getState().profiles.profilesList];
      const profileIndex = getState().profiles.profilesList.findIndex(
        profile => profile.id == id,
      );

      if (profileIndex == -1) throw 'Profile with the given ID was not found';

      updatedProfilesList[profileIndex] = {
        ...updatedProfilesList[profileIndex],
        layout: newLayout,
      };

      await AsyncStorage.setItem(
        'profiles',
        JSON.stringify(updatedProfilesList),
      );
      return updatedProfilesList;
    } catch (err) {
      throw err;
    }
  },
);

const slice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {
    selectProfile: (state, action) => {
      const { id } = action.payload;
      const profile = state.profilesList.find(profile => profile.id == id);
      state.selectedProfile = JSON.parse(JSON.stringify(profile));

      state.staticProfileCopy = JSON.parse(JSON.stringify(profile));
    },

    deselectProfile: state => {
      state.selectedProfile = initialState.selectedProfile;
      state.staticProfileCopy = initialState.staticProfileCopy;
    },

    addItem: (state, action) => {
      const { type, input, width, height } = action.payload;
      const selectedProfile = state.selectedProfile;
      const addedItem = {
        id: uuidv4(),
        type,
        input,
        xPos: state.viewDimensions.width / 2 - 50,
        yPos: state.viewDimensions.height / 2 - 50,
        width,
        height,
      };
      state.selectedProfile = {
        ...selectedProfile,
        layout: [...selectedProfile.layout, addedItem],
      };

      state.staticProfileCopy = {
        ...state.staticProfileCopy,
        layout: [...state.staticProfileCopy.layout, addedItem],
      };
    },

    addButton: (state, action) => {
      const {
        input,
        text,
        xPos,
        yPos,
        width,
        height,
        borderWidth,
        borderRadius,
        borderColor,
        backgroundColor,
        fontSize,
        fontWeight,
        fontColor,
      } = action.payload;
      const selectedProfile = state.selectedProfile;
      const addedItem = {
        id: uuidv4(),
        input,
        text,
        xPos,
        yPos,
        width,
        height,
        borderWidth,
        borderRadius,
        borderColor,
        backgroundColor,
        fontSize,
        fontWeight,
        fontColor,
      };
      state.selectedProfile = {
        ...selectedProfile,
        layout: [...selectedProfile.layout, addedItem],
      };

      state.staticProfileCopy = {
        ...state.staticProfileCopy,
        layout: [...state.staticProfileCopy.layout, addedItem],
      };
    },

    addStick: (state, action) => {
      const {
        input,
        text,
        xPos,
        yPos,
        stickDiameter,
        maxDistance,
        outerBorderWidth,
        outerBorderColor,
        innerBackgroundColor,
        fontSize,
        fontWeight,
        fontColor,
      } = action.payload;
      const selectedProfile = state.selectedProfile;
      const addedItem = {
        id: uuidv4(),
        input,
        text,
        xPos,
        yPos,
        stickDiameter,
        maxDistance,
        outerBorderWidth,
        outerBorderColor,
        innerBackgroundColor,
        fontSize,
        fontWeight,
        fontColor,
      };
      state.selectedProfile = {
        ...selectedProfile,
        layout: [...selectedProfile.layout, addedItem],
      };

      state.staticProfileCopy = {
        ...state.staticProfileCopy,
        layout: [...state.staticProfileCopy.layout, addedItem],
      };
    },

    deleteItem: (state, action) => {
      const { id } = action.payload;
      const selectedProfile = state.selectedProfile;
      state.selectedProfile = {
        ...selectedProfile,
        layout: selectedProfile.layout.filter(item => item.id != id),
      };

      state.staticProfileCopy = {
        ...state.staticProfileCopy,
        layout: state.staticProfileCopy.layout.filter(item => item.id != id),
      };
    },

    updateItemPosition: (state, action) => {
      const { id, xPos, yPos } = action.payload;
      const selectedProfile = state.selectedProfile;
      const updatedProfile = {
        ...selectedProfile,
        layout: [...selectedProfile.layout],
      };
      const itemIndex = updatedProfile.layout.findIndex(item => item.id == id);
      updatedProfile.layout[itemIndex] = {
        ...updatedProfile.layout[itemIndex],
        id,
        xPos,
        yPos,
      };
      state.selectedProfile = updatedProfile;
    },

    updateItemDimensions: (state, action) => {
      const { id, width, height } = action.payload;
      const selectedProfile = state.selectedProfile;
      const updatedProfile = {
        ...selectedProfile,
        layout: [...selectedProfile.layout],
      };
      const itemIndex = updatedProfile.layout.findIndex(item => item.id == id);
      updatedProfile.layout[itemIndex] = {
        ...updatedProfile.layout[itemIndex],
        id,
        width,
        height,
      };
      state.selectedProfile = updatedProfile;
    },

    setViewDimensions: (state, action) => {
      const { width, height } = action.payload;
      state.viewDimensions = { width, height };
    },
  },
  extraReducers: {
    [fetchProfiles.fulfilled]: (state, action) => {
      state.profilesList = action.payload;
      state.fetchProfilesStatus = 'succeeded';
      state.fetchProfilesError = null;
    },
    [fetchProfiles.rejected]: (_, action) => {
      alert(action.error.message);
    },

    [createProfile.fulfilled]: (state, action) => {
      state.profilesList = action.payload;
    },
    [createProfile.rejected]: (_, action) => {
      alert(action.error.message);
    },

    [updateLayout.fulfilled]: (state, action) => {
      state.profilesList = action.payload;
      alert('Profile saved!');
    },
    [updateLayout.rejected]: (_, action) => {
      alert(action.error.message);
    },

    [deleteProfile.fulfilled]: (state, action) => {
      state.profilesList = action.payload;
    },
    [deleteProfile.rejected]: (_, action) => {
      alert(action.error.message);
    },
  },
});

export const selectProfilesList = state => state.profiles.profilesList;
export const selectSelectedProfile = state => state.profiles.selectedProfile;
export const selectStaticProfileCopy = state =>
  state.profiles.staticProfileCopy;
export const selectViewDimensions = state => state.profiles.viewDimensions;

export const {
  selectProfile,
  deselectProfile,
  addItem,
  addButton,
  addStick,
  deleteItem,
  updateItemPosition,
  setViewDimensions,
  updateItemDimensions,
} = slice.actions;

export default slice.reducer;
