[![mcbersatu](https://www.mcbersatu.com/favicon.ico)](https://www.mcbersatu.com)

# Minecrafter Bersatu Website

This repository contains the source code for the official website of Minecrafter Bersatu, a collaborative annual event for the Indonesian Minecraft community to celebrate Indonesia's Independence Day. The site provides event information, a countdown, a detailed timeline, and directs users to registration and live streams.

## Tech Stack

This project is a modern web application built with a powerful and efficient stack:

-   **Backend**: [Laravel 12](https://laravel.com/)
-   **Frontend**: [React](https://react.dev/) (with TypeScript)
-   **Framework**: [Inertia.js](https://inertiajs.com/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
-   **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
-   **Deployment**: [Vercel](https://vercel.com/) (configured for serverless PHP)

## Features

-   **Dynamic Content**: The home page features a video banner that changes based on the event's progress (pre-event teaser vs. main event video).
-   **Live Countdown**: A real-time countdown timer builds anticipation for the main event date.
-   **Event Timeline**: A tabbed, responsive timeline details the schedule for each event day.
-   **Context-Aware CTAs**: The primary call-to-action button dynamically changes its function and text based on the current date (e.g., "Mark Calendar", "Register Now", "Watch Live").
-   **FAQ Section**: An accordion-style FAQ section to answer common questions about the event.
-   **Sponsors & Partners**: A dedicated section to showcase sponsors, community partners, and media partners.
-   **Responsive Design**: The site is fully responsive, with dedicated mobile experiences like a drawer for CTAs on smaller screens.

## Project Structure

The repository follows a standard Laravel project structure, with the frontend source code primarily located in the `resources/js` directory.

-   `resources/js/pages/`: Contains the main page components for Inertia.js (`home.tsx`, `about.tsx`, etc.).
-   `resources/js/components/`: Houses reusable React components, including UI elements from shadcn/ui and custom components like `countdown.tsx` and `timeline-tab.tsx`.
-   `resources/js/data/`: Stores static configuration and text content for the frontend, such as event dates, timeline details, and page copy.
-   `routes/web.php`: Defines the web routes that render the Inertia pages.
-   `config/`: Standard Laravel application configuration files.
-   `vercel.json`: Configuration for deploying the application on Vercel.

## Local Development

To run this project locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/mcbersatudev/mcbersatu-web.git
    cd mcbersatu-web
    ```

2.  **Install PHP dependencies:**

    ```bash
    composer install
    ```

3.  **Install Node.js dependencies:**

    ```bash
    npm install
    ```

4.  **Set up your environment file:**

    ```bash
    cp .env.example .env
    ```

5.  **Generate an application key:**

    ```bash
    php artisan key:generate
    ```

6.  **Run the development servers:**
    The project includes a convenient composer script to start the Vite, PHP, and queue servers concurrently.

    ```bash
    composer run dev
    ```

7.  **Access the application:**
    Open your browser and navigate to `http://127.0.0.1:8000`.

## License

This project is licensed under the **CC0 1.0 Universal** public domain dedication. You are free to use, modify, and distribute the code for any purpose, without any restrictions. See the [LICENSE](LICENSE) file for more details.
