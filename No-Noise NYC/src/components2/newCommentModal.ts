import { Tab } from '@headlessui/react'
import { AtSymbolIcon, CodeBracketIcon, LinkIcon } from '@heroicons/react/20/solid'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-comment-modal',
  template: `
  <form action="#">
  <Tab.Group>
      {{({ selectedIndex }) => (
          <>
              <Tab.List className="flex items-center">
                  <Tab
                      className={{selected =>
                          classNames(
                              selected
                                  ? 'text-gray-900 bg-gray-100 hover:bg-gray-200'
                                  : 'text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100',
                              'rounded-md border border-transparent px-3 py-1.5 text-sm font-medium'
                          )
                      }}
                  >
                      Write
                  </Tab>
                  <Tab
                      className={{selected =>
                          classNames(
                              selected
                                  ? 'text-gray-900 bg-gray-100 hover:bg-gray-200'
                                  : 'text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100',
                              'ml-2 rounded-md border border-transparent px-3 py-1.5 text-sm font-medium'
                          )
                      }}
                  >
                      Preview
                  </Tab>
                  {{selectedIndex === 0 ? (
                      <div className="ml-auto flex items-center space-x-5">
                          <div className="flex items-center">
                          </div>
                          <div className="flex items-center">
                              <button
                                  type="button"
                                  className="-m-2.5 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                              >
                                  <span className="sr-only">Insert code</span>
                                  <CodeBracketIcon className="h-5 w-5" aria-hidden="true" />
                              </button>
                          </div>
                          <div className="flex items-center">
                          </div>
                      </div>
                  ) : null}}
              </Tab.List>
              <Tab.Panels className="mt-2">
                  <Tab.Panel className="-m-0.5 rounded-lg p-0.5">
                      <label htmlFor="comment" className="sr-only">
                          Comment
                      </label>
                      <div>
                          <input
                              rows={5}
                              name="comment"
                              id="comment"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder="Add your comment..."
                              [value]="content"
                              (input)="setContent($event.target.value)"
                          />
                      </div>
                  </Tab.Panel>
                  <Tab.Panel className="-m-0.5 rounded-lg p-0.5">
                                <div className="border-b">
                                    <div className="mx-px mt-px px-3 pt-2 pb-12 text-sm leading-5 text-gray-800">
                                        Preview content will render here.
                                    </div>
                                </div>
                            </Tab.Panel>
                        </Tab.Panels>
  `,
  styles: [],
})
export class NewCommentModalComponent implements OnInit {
  selectedIndex = 0;
  content = '';

  constructor() {}

  ngOnInit(): void {}

  function createComment() {
    const userId = +localStorage.getItem('user_id');
    const postId = postId; 
    const content = content;
    
    return fetch(`http://localhost:4005/new_comment`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user_id: userId,
            post_id: postId,
            comment: content
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        setContent('');
    })
    .catch(error => {
        console.error(error);
    });
}
}