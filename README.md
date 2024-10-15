# Web Development Project 4 - RandiDogs

Submitted by: Mignot Mesele

This web app: Displays random dogs at every click, featuring tag filtering with their attributes.

Time spent: 5 hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **Clicking a button creates a new API fetch request and displays at least three attributes from the returned JSON data**
- [X] **Only one item/API call is viewable at a time**
- [X] **API calls appear random to the user**
- [X] **At least one image is displayed per API call**
- [X] **Clicking on a displayed value for one attribute adds it to a displayed ban list**
  - [X] To ensure an accurate grade, your recording **must** show that when clicked, an attribute in the ban list is immediately removed from the list of banned attributes
- [X] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**

The following **optional** features are implemented:

- [ ] Multiple types of attributes can be added to the ban list
- [ ] Users can see a stored history of their previously viewed items from their session

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<a href='http://i.imgur.com/link/to/your/gif/file.gif' alt='Video Walkthrough'>Video Walkthrough</a>

GIF created with [Kap](https://getkap.co/) for macOS

## Notes

The dog api didn't make it easy when trying to fetch random dogs because their api for their information only lets you get it in an order from 1 to the limit inputted in the parameters. I made a limit of 100 and created a random selection function so it would solve this.

## License

    Copyright 2024 Mignot Mesele

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.