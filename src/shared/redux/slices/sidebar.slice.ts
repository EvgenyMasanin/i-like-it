import { createSelector, createSlice } from '@reduxjs/toolkit'

import { useActions } from '..'

const initialState = {
  isDrawerOpen: false,
  isCollapsed: false,
}

type SidebarSliceState = typeof initialState

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleDrawer(state) {
      state.isDrawerOpen = !state.isDrawerOpen
    },
    collapse(state) {
      state.isCollapsed = !state.isCollapsed
    },
  },
  selectors: {
    selectIsSidebarDrawerOpen: (state) => state.isDrawerOpen,
    selectIsSidebarCollapsed: (state) => state.isCollapsed,
    selectSidebarFlags: createSelector(
      [
        (state: SidebarSliceState) => state.isDrawerOpen,
        (state: SidebarSliceState) => state.isCollapsed,
      ],
      (isDrawerOpen, isCollapsed) => ({
        isDrawerOpen,
        isCollapsed,
      })
    ),
  },
})

export const useSidebarActions = () => useActions(sidebarSlice.actions)

export const { selectIsSidebarDrawerOpen, selectSidebarFlags, selectIsSidebarCollapsed } =
  sidebarSlice.selectors
