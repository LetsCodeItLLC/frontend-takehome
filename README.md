![Logo_Horiz_Outlines_K](https://user-images.githubusercontent.com/13429481/135781260-98960a5f-6569-4174-8394-aabdf717923a.png)

# Frontend Takehome Assessment

This is an exercise that will give you a glimpse of the typical day-to-day challenges that we tackle at LCI!

You will be recreating a multiselect dropdown component, packed with several features which will be explained in detail in the acceptance criteria.

At Let’s Code It, we deliver solutions with a future-focused, pixel-perfect mindset. So pay extra attention to the user experiences, and the design details provided below.

## Design Guide:

[Figma file](https://www.figma.com/file/V6fQQszd5eXZGAQFNGKtH4/LCI-Multiselect-Takehome?node-id=0%3A1)

![image](https://user-images.githubusercontent.com/13429481/135794441-4c7d0eb5-b61a-47b6-924e-ca694618dc0f.png)


## Acceptance Criteria

- The multiselect in its initial, empty state should display a placeholder text of "Select..."
- When the user types a non-empty string in the input box, the component should query the list of matching results from the `useGetColor` hook
  - For sanitizing the search string, a text-to-lowercase transformation should suffice.
  - The UI should be performant, and not incur too many promise calls. In other words, think of a way to limit the number of times `useGetColor` is called on search input's change listener.
- The user should only be able to select an option once. Filter the data from `useGetColor` with the set of selected options.
- The results list should display an empty state for zero results returned from `useGetColor`.
- Clicking on the selected token should remove the option from the selected list.
- The user can only select up to three (3) options. Disable the text input once there are three selected options. 

# Development
Clone a copy of this repository, and run the following commands in your CLI to start development
```zsh
$ yarn
$ yarn dev 
```
Open `localhost:3000`, and start developing!

# Questions?

Email our team at: jon@letscodeit.io for any questions related to the take home. Good luck! 
