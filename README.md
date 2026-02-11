# Snehal's Portfolio Website

A modern, interactive portfolio website built with Next.js, React, and Tailwind CSS.

## Features

- 🎨 Modern glassmorphic design
- 🤖 AI-powered chatbot assistant
- 📊 GitHub integration to display repositories
- 📱 Fully responsive design
- ✨ Smooth animations and transitions
- 🌙 Dark mode support
- 📧 Contact form with email integration

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/snehal28668/snehal-portfolio.git
cd snehal-portfolio
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Set up environment variables:
```bash
# Copy the example file
cp .env.example .env.local
```

4. Edit `.env.local` and add your configuration:
```env
GITHUB_USERNAME=your_github_username
GITHUB_TOKEN=your_github_personal_access_token  # Optional
```

> **Note:** The `GITHUB_TOKEN` is optional but recommended for higher API rate limits. Generate one at [GitHub Settings → Developer settings → Personal access tokens](https://github.com/settings/tokens) with `public_repo` scope.

### Running the Development Server

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
├── app/                 # Next.js app directory
│   ├── api/            # API routes
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── pages/         # Page components
│   ├── ui/            # UI components
│   └── ...
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── public/            # Static assets
└── styles/            # Global styles
```

## Technologies Used

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Radix UI** - Component library
- **Lucide Icons** - Icon library
- **React Hook Form** - Form management
- **Recharts** - Data visualization

## Troubleshooting

### Module format errors
If you see "Specified module format (CommonJs) is not matching", make sure `"type": "commonjs"` is removed from `package.json`.

### Missing environment variables
The app can run without `GITHUB_TOKEN`, but the GitHub repositories feature will have rate limits.

## Contributing

Feel free to fork this project and submit pull requests for any improvements.

## License

This project is licensed under the ISC License.

## Contact

- GitHub: [@snehal28668](https://github.com/snehal28668)
- Portfolio: [snehal-portfolio.vercel.app](https://snehal-portfolio.vercel.app)

---

**Happy coding!** 🚀
