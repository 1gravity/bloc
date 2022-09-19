/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  "gettingStartedSidebar": [
    {
      "type": "doc",
      "id": "getting_started/overview"
    },
    {
      "type": "doc",
      "id": "getting_started/setup"
    },
    {
      "type": "doc",
      "id": "getting_started/examples"
    }
  ],
  "architectureSidebar": [
    {
      "type": "doc",
      "id": "architecture/architecture_overview"
    },
    {
      "Bloc": [
        {
          "type": "doc",
          "id": "architecture/bloc/bloc"
        },
        {
          "type": "doc",
          "id": "architecture/bloc/reducer"
        },
        {
          "type": "doc",
          "id": "architecture/bloc/thunk"
        },
        {
          "type": "doc",
          "id": "architecture/bloc/initializer"
        },
        {
          "type": "doc",
          "id": "architecture/bloc/bloc_builder"
        },
        {
          "type": "doc",
          "id": "architecture/bloc/lifecycle"
        },
        {
          "type": "doc",
          "id": "architecture/bloc/bloc_context"
        },
        {
          "type": "doc",
          "id": "architecture/bloc/coroutine_launcher"
        }      ]
    },
    {
      "Bloc State": [
        {
          "type": "doc",
          "id": "architecture/blocstate/bloc_state"
        },
        {
          "type": "doc",
          "id": "architecture/blocstate/bloc_state_builder"
        }
      ]
    },
    {
      "Bloc Owner et al.": [
        {
          "type": "doc",
          "id": "architecture/blocowner/bloc_owner"
        },
        {
          "type": "doc",
          "id": "architecture/blocowner/bloc_observable"
        }
      ]
    },
  ],
  "extensionsSidebar": [
    {
      "type": "doc",
      "id": "extensions/overview"
    },
    { 
      "Android": [
        {
          "type": "doc",
          "id": "extensions/android/android_bloc_context"
        },
        {
          "type": "doc",
          "id": "extensions/android/android_data_binding"
        },
        {
          "type": "doc",
          "id": "extensions/android/android_live_data"
        },
        {
          "type": "doc",
          "id": "extensions/android/android_subscription"
        },
        {
          "type": "doc",
          "id": "extensions/android/android_compose"
        }
      ]
    },
    { 
      "iOS": [
        {
          "type": "doc",
          "id": "extensions/ios/ios_overview"
        },
        {
          "type": "doc",
          "id": "extensions/ios/ios_bloc_holder"
        },
        {
          "type": "doc",
          "id": "extensions/ios/ios_bloc_component"
        },
        {
          "type": "doc",
          "id": "extensions/ios/ios_bloc_observer"
        }
      ]
    },
    { 
      "Redux": [
        {
          "type": "doc",
          "id": "extensions/redux/redux_motivation"
        },
        {
          "type": "doc",
          "id": "extensions/redux/redux_setup"
        },
        {
          "type": "doc",
          "id": "extensions/redux/redux_bloc_state"
        }
      ]
    }
  ],
  "exampleSidebar": [
    {
      "type": "doc",
      "id": "examples/examples"
    },
    {
      "type": "doc",
      "id": "examples/counter"
    },
    {
      "type": "doc",
      "id": "examples/books"
    },
    {
      "type": "doc",
      "id": "examples/calculator"
    },
    {
      "type": "doc",
      "id": "examples/posts"
    },
    {
      "type": "doc",
      "id": "examples/todo"
    },
  ]

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
