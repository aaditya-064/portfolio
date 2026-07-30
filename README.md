# Portfolio Website (Hack Club Macondo)

A clean personal portfolio built with React and custom inline styling. Designed and built for Hack Club Macondo to showcase my recent projects, software experiments, and contact info.

## 🛠️ What I Built & Learned

For this project, I wanted a lightweight portfolio that didn't rely on massive UI component libraries. Everything is built using functional React components and custom inline styles.

Key highlights:

- **Custom Form Components:** Built a reusable `<Input />` component that dynamically switches between standard inputs and a `<textarea>` for multi-line messages without messing up layout spacing or box alignment.
- **Top-Aligned Placeholders:** Fixed default browser centering on multiline text fields using explicit top padding and `box-sizing: border-box`.
- **Dark Mode UI:** Custom dark theme with green accent buttons and soft drop shadows.

## 📁 Project Structure

├── src/
│ ├── components/
│ │ └── ui/
│ │ ├── button.js # Custom styled submit buttons
│ │ └── input.js # Dynamic input & textarea component
│ ├── pages/
│ │ └── Contact.js # Contact form with mapped data items
│ ├── App.js
│ └── index.js
├── package.json
└── README.md

## 🚀 How to Run Locally

If you want to test or run this project on your machine, follow these steps:

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation & Execution

1. **Clone the repository:**

   ```bash
   git clone [https://github.com/aaditya-064/portfolio.git] (https://github.com/aaditya-064/portfolio.git)
   cd portfolio
   cd client

   Install dependencies:
   => npm install
   
   Start the development server:
   => npm start

   Open http://localhost:5173 in our browser to view the app
   ```
