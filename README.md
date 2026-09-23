# 10 Redux Projects — Learning Redux Through Problem Solving

A hands-on React and Redux learning journey: **I will solve 10 different problems using Redux**, starting with a simple counter and gradually working toward more complex, real-world applications.

The goal of this repository is to understand **how, when, and why to use Redux** by building practical projects. Each project focuses on a different state-management challenge and introduces new concepts along the way.

> **Project status:** 1 of 10 projects completed. This repository is a work in progress.

## Tech Stack

- **React** — user interfaces
- **Redux Toolkit** — Redux state management
- **React Redux** — connecting React components to the Redux store
- **JavaScript** — application logic
- **Vite** — development tooling

Some projects may introduce additional libraries or APIs. Check each project's own README or `package.json` for its exact setup.

## Getting Started

### Prerequisites

Install the following before running a project:

- [Node.js](https://nodejs.org/) (an active LTS version is recommended; npm is included)
- [Git](https://git-scm.com/)

### Clone the repository

```bash
git clone https://github.com/ichbintanvir/react-redux.git
cd react-redux
```

### Install dependencies and run a project

This repository is planned to contain **10 independent project folders**. Each project can have its own dependencies and scripts. To run a project, enter its folder and follow its local instructions. For example, once the Todo List project is added:

```bash
cd 02-todo-list
npm install
npm run dev
```

Open the local URL shown in the terminal (typically `http://localhost:5173`). Stop the development server with `Ctrl + C`.

**Running the current counter project:** While the original app remains in the repository root, run `npm install` and `npm run dev` from the root directory. If it is later moved into `01-counter-summation/`, run those commands from that folder instead.

## Project Roadmap

| # | Project | Problem to solve | Redux concepts to practice | Status |
| --- | --- | --- | --- | --- |
| 01 | Counter & Summation | Update a counter and calculate sums through shared state. | Store, actions, reducers, `useSelector`, `useDispatch` | ✅ Completed |
| 02 | Todo List Manager | Add, edit, delete, complete, and filter tasks. | Array updates, CRUD actions, selectors | 📋 Planned |
| 03 | Shopping Cart | Manage cart items, quantities, discounts, and totals. | Derived state, selectors, multiple reducers | 📋 Planned |
| 04 | Expense Tracker | Track income, expenses, categories, and balances. | Structured state, filtering, aggregated values | 📋 Planned |
| 05 | Theme & Preferences | Share theme and user settings across components and preserve them after refresh. | Global UI state, persistence | 📋 Planned |
| 06 | User Directory | Fetch users, search records, and show loading and error states. | Async actions, `createAsyncThunk`, request lifecycle | 📋 Planned |
| 07 | Authentication Demo | Manage demo login/logout state and protected UI. | Auth state, conditional UI, state reset | 📋 Planned |
| 08 | Kanban Board | Create, organize, and move tasks between workflow columns. | Normalized state, complex updates, `createEntityAdapter` | 📋 Planned |
| 09 | Notification Center | Create, dismiss, and mark notifications as read. | Cross-slice actions, listener middleware, selectors | 📋 Planned |
| 10 | Inventory Dashboard | Manage products, stock, and orders in an admin interface. | Multiple slices, RTK Query, cache invalidation | 📋 Planned |

The roadmap describes **planned learning goals**, not a claim that every listed feature is already implemented. Project scope may evolve as I learn.

## Planned Repository Structure

```text
react-redux/
├── README.md
├── 01-counter-summation/
├── 02-todo-list/
├── 03-shopping-cart/
├── 04-expense-tracker/
├── 05-theme-preferences/
├── 06-user-directory/
├── 07-authentication/
├── 08-kanban-board/
├── 09-notification-center/
└── 10-inventory-dashboard/
```

> **Note:** This is the *target* structure. The completed counter app may currently be in the repository root; folders for future projects will be created as those projects are built.

Each project will aim to include its own source code, setup instructions, and a short explanation of the problem and Redux approach.

## Learning Objectives

By completing this series, I aim to:

1. Understand Redux data flow: **UI → dispatch → action → reducer → updated store → UI**.
2. Design state and write reducers for practical problems.
3. Use Redux Toolkit and React Redux effectively.
4. Distinguish local component state from shared application state.
5. Handle asynchronous requests and their loading, success, and error states.
6. Organize more complex state across slices, selectors, and middleware.
7. Build and document reusable problem-solving examples.

## How I Will Approach Each Project

For every example, I will identify the problem, plan the state shape and actions, implement the solution, test its behavior, and document what I learned. I will update the roadmap as projects are completed.

## Resources

- [Redux documentation](https://redux.js.org/)
- [Redux Toolkit documentation](https://redux-toolkit.js.org/)
- [React Redux documentation](https://react-redux.js.org/)
- [React documentation](https://react.dev/)

## Feedback

Suggestions, questions, and constructive feedback are welcome. Feel free to [open an issue](https://github.com/ichbintanvir/react-redux/issues) to discuss an example or suggest an improvement.

---

**Learning by building — one Redux problem at a time.**
