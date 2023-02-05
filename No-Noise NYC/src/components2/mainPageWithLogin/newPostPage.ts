import { Component, OnInit } from '@angular/core';
import { Menu, Popover, Transition } from '@headlessui/react';
import {BasicModalComponent} from './modal.js';
import {CommentModalComponent} from '../commentModal';
import {CommentDropDownComponent} from '../commentDropdown';
import {
ChatBubbleLeftEllipsisIcon,
CodeBracketIcon,
EllipsisVerticalIcon,
EyeIcon,
FlagIcon,
HandThumbUpIcon,
MagnifyingGlassIcon,
PlusIcon,
ShareIcon,
StarIcon,
} from '@heroicons/react/20/solid';
import {
ArrowTrendingUpIcon,
Bars3Icon,
BellIcon,
FireIcon,
HomeIcon,
UserGroupIcon,
XMarkIcon,
} from '@heroicons/react/24/outline';

@Component({
selector: 'app-post-feed',
template: <div class="post-feed">
  
<div>
  {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
  <Popover
    as="header"
    className={({ open }) =>
      classNames(
        open ? 'fixed inset-0 z-40 overflow-y-auto' : '',
        'black shadow-sm lg:static lg:overflow-y-visible'
      )
    }
  >
    {({ open }) => (
      <>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
            <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
              <div className="flex flex-shrink-0 items-center">

              </div>
            </div>
            {/* <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6" style={position}>
              <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                <div className="w-full">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-rose-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-rose-500 sm:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>
            </div> */}
            <div className="flex items-center md:absolute md:inset-y-0 md:right-0 lg:hidden">
              {/* Mobile menu button */}
              <Popover.Button className="-mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
                <span className="sr-only">Open menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Popover.Button>
            </div>
            <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">


              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-5 flex-shrink-0">
                <div>
                  <Menu.Button className="flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2">
                    <span className="sr-only">Open user menu</span>

                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <a
                            href={item.href}
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block py-2 px-4 text-sm text-gray-700'
                            )}
                          >
                            {item.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
              {/* <div style={post}><BasicModal /></div> */}
            </div>
          </div>
        </div>

        <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
          <div className="mx-auto max-w-3xl space-y-1 px-2 pt-2 pb-3 sm:px-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50',
                  'block rounded-md py-2 px-3 text-base font-medium'
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
   
          <div className="">
        
            <div className="mx-auto flex max-w-3xl items-center px-4 sm:px-6">
              <div className="flex-shrink-0">

              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">{user.name}  <img  src={img} style={imgs2} alt="profile" /></div>
                <div className="text-sm font-medium text-gray-500">{user.email}</div>
              </div>
              <button
                type="button"
                className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mx-auto mt-3 max-w-3xl space-y-1 px-2 sm:px-4">
              {userNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-6 max-w-3xl px-4 sm:px-6">
            <a
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-rose-700">
              New Post
            </a>
          </div>
        </Popover.Panel>
      </>
    )}
  </Popover>

  <div className="py-10">
    <div className="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
      <div className="hidden lg:col-span-3 lg:block xl:col-span-2">
      </div>
      <main className="lg:col-span-9 xl:col-span-6">
        <div className="px-4 sm:px-0">
          <div className="sm:hidden">
            <label htmlFor="question-tabs" className="sr-only">
              Select a tab
            </label>

          </div>

        </div>
        {/* <center> */}
        <div className="mt-4">
          <h1 className="sr-only">Recent questions</h1>
          <ul role="list" className="space-y-4">
            {questions.map((question) => (
              <li key={question.user_id} style={{ width: "500px" }} className="bg-white px-8 py-6 shadow sm:rounded-lg sm:p-6">
                <article aria-labelledby={'question-title-' + question.user_id}>
                  <div>
                    <div className="flex space-x-3">
                      <div className="flex-shrink-0">
                        <img className="h-10 w-10 rounded-full" src={img} alt="iimg" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm text-gray-500">
                          {question.username}
                        </p>
                      </div>
                      <div className="flex flex-shrink-0 self-center">
                        <Menu as="div" className="relative inline-block text-left">
                          <div>
                            <Menu.Button className="-m-2 flex items-center rounded-full p-2 text-gray-400 hover:text-gray-600">
                              <span className="sr-only">Open options</span>
                              <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
                            </Menu.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="py-1">
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'flex px-4 py-2 text-sm'
                                      )}
                                    >
                                      <StarIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                                      <span>Add to favorites</span>
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'flex px-4 py-2 text-sm'
                                      )}
                                    >
                                      <CodeBracketIcon
                                        className="mr-3 h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                      />
                                      <span>Embed</span>
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'flex px-4 py-2 text-sm'
                                      )}
                                    >
                                      <FlagIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                                      <span>Report content</span>
                                    </a>
                                  )}
                                </Menu.Item>
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                    <center><h1>#{question.post_type}</h1></center>
                    <h2 id={'question-title-' + question.id} className="mt-4 text-base font-medium text-gray-900">
                      {question.post_title}
                    </h2>
                  </div>
                  <div
                    className="mt-2 space-y-4 text-sm text-gray-700"
                    dangerouslySetInnerHTML={{ __html: question.post_description }}
                  />
                  <div className="mt-6 flex justify-between space-x-8">
                    <div className="flex space-x-6">
                      <span className="inline-flex items-center text-sm">
                        {/* <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                          <HandThumbUpIcon className="h-5 w-5" aria-hidden="true" onClick={(e) => { setLikes(question.likes+1); e.preventDefault() }} />
                          <span className="font-medium text-gray-900">{likes}</span>
                          <span className="sr-only">{likes}</span>
                        </button> */}
                      </span>
                      <span className="inline-flex items-center text-sm">
                        <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">
                          <CommentModal className="h-5 w-5" aria-hidden="true" postId={question.post_id}/>
                          <span className="font-medium text-gray-900"></span>
                          <span className="sr-only">likes</span>
                        </button>
                      </span>
                      <span className="inline-flex items-center text-sm">
                        <button type="button" className="inline-flex space-x-2 text-gray-400 hover:text-gray-500">

                          <span className="font-medium text-gray-900"></span>
                          <span className="sr-only">likes</span>
                        </button>
                        <CommentDropDown className="h-5 w-5" aria-hidden="true" postId={question.post_id}/>
                      </span>

                    </div>
                    <div className="flex text-sm">

                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
        {/* </center> */}
      </main>
      <aside className="hidden xl:col-span-4 xl:block">
        <div className="sticky top-4 space-y-4">

        </div>
      </aside>
    </div>
  </div>
</div>
</></div> ,
styleUrls: ['./post.css']
})
export class PostFeedComponent implements OnInit {
private user = {
name: 'aspiringcoder69',
email: 'coder@gmail.com',
imageUrl:
'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

private thumbs = {
backgroundColor: 'blue',
};
private navigation = [
{ name: 'Home', href: '#', icon: HomeIcon, current: true },
{ name: 'Profile', href: '#', icon: FireIcon, current: false },
];

private userNavigation = [
{ name: 'Your Profile', href: '#' },
{ name: 'Sign out', href: '#' },
];

private tabs = [
{ name: 'Recent', href: '#', current: true },
{ name: 'Most Liked', href: '#', current: false },
{ name: 'Most Answers', href: '#', current: false },
];

private isClicked: boolean;
private questions: any;
private setQuestions: Function;
private likes: any;
private setLikes: Function;
private loadPost: Function;

private position = {
position: 'relative',
left: '40px',
};

private imgs2 = {
borderRadius: '50%',
};

private post = {
backgroundColor: 'transparent',
position: 'relative',
right: '40px',
top: '140px',
};

ngOnInit(): void {
console.log('questions', this.questions);
}

private classNames(...classes) {
return classes.filter(Boolean).join(' ');
}
}

  // console.log(likes)
  // console.log(questions.likes)


 