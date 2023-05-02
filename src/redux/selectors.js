import { createSelector } from "@reduxjs/toolkit";


export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(({ name }) =>
            name.toLowerCase().includes(normalizedFilter)
        );
    }
);