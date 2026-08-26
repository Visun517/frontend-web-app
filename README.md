# 🎓 ECA Campus Management System — Frontend Web Application

> A modern, highly responsive frontend application for the **ECA Campus Management System**, providing a comprehensive UI for managing students, academic programs, and enrollments — communicating seamlessly with backend microservices through a centralized API Gateway.

**🌐 Live Deployed Application URL:** [http://34.126.159.127](http://34.126.159.127)
*(Deployed on **Google Cloud Run** behind a **Regional External Application Load Balancer**)*

---

## 📌 Student & Project Information

| Field | Details |
|---|---|
| **Student Name** | Visun Prabodha |
| **Student Number** | 241711009 |
| **Slack Handle** | Visun Prabodha |
| **GCP Project ID** | `visun-gcp-lab` |
| **Submission Type** | Alternative Option (Capstone Project) |

---

## 📖 About The Project

This project is submitted for the **Enterprise Cloud Architecture (ITS 2130)** module in the **Higher Diploma in Software Engineering (HDSE)** program at the **Institute of Software Engineering (IJSE)**.

The frontend consumes backend microservices deployed on **Google Cloud Platform (GCP)**. It features **Cloud Storage integration**, where student profile pictures are successfully uploaded and fetched directly from a **GCP Cloud Storage Bucket**. The architecture ensures robust state management, form validation, and optimized routing across the full campus management workflow.

---

## 🏛️ How This App Fits the Architecture

```
┌────────────────────────────┐
│   Frontend Web App           │
│   (Next.js — Cloud Run)      │
│   Port 3000                  │
└──────────────┬─────────────┘
               │ HTTP (Axios)
               ▼
┌────────────────────────────┐
│   api-gateway (Port 7000)    │
│   Spring Cloud Gateway       │
└──────────────┬─────────────┘
               │ lb://
   ┌───────────┼───────────────┐
   ▼           ▼               ▼
student-svc  program-svc  enrollment-svc
   │
   ▼
Google Cloud Storage
(Profile Pictures)
```

---

## 🛠️ Tech Stack

| Category | Technology | Description |
|---|---|---|
| **Framework** | Next.js 16.1.6 | App Router for SSR and optimized routing |
| **Library** | React 19.2.3 | Core UI library |
| **Language** | TypeScript 5 | Static typing for enterprise-grade code |
| **Styling** | Tailwind CSS 4 | Utility-first CSS framework |
| **Components** | ShadCN UI | Accessible Radix UI primitives |
| **Forms** | React Hook Form | Performant form state management |
| **Validation** | Zod | TypeScript-first schema validation |
| **Networking** | Axios | Promise-based HTTP client for API requests |
| **Icons** | Lucide React | Clean and modern icon set |
| **Feedback** | Sonner | Toast notifications for user interactions |
| **Utilities** | date-fns | Modern JavaScript date utility library |
| **Cloud Deployment** | Google Cloud Run | Serverless container hosting |
| **Networking (Cloud)** | Regional External Application Load Balancer | Routes public traffic to the deployed app |

---

## ✨ Core Features

| Page | Path | Description |
|---|---|---|
| **Dashboard** | `/dashboard` | System statistics overview, recent enrollment activities, and quick action shortcuts. |
| **Students** | `/students` | Full CRUD operations for students, featuring direct GCP Bucket avatar display and uploads. |
| **Programs** | `/programs` | Create, view, edit, and delete academic programs utilizing responsive card and table views. |
| **Enrollments** | `/enrollments` | Streamlined enrollment management linking students to programs with active filtering. |

---

## 📂 Project Structure

```text
webapp/
├── app/
│   ├── layout.tsx            # Root layout (Sidebar + Header + Toaster)
│   ├── page.tsx              # Entry point (Redirects to /dashboard)
│   ├── dashboard/page.tsx    # Dashboard overview interface
│   ├── students/page.tsx     # Student management interface
│   ├── programs/page.tsx     # Program management interface
│   └── enrollments/page.tsx  # Enrollment management interface
├── components/
│   ├── layout/
│   │   ├── sidebar.tsx       # Fixed navigation sidebar
│   │   └── header.tsx        # Sticky top header
│   ├── students/
│   │   └── student-form.tsx  # Form component for Student entities
│   ├── programs/
│   │   └── program-form.tsx  # Form component for Program entities
│   └── enrollments/
│       └── enrollment-form.tsx # Form component for Enrollment logic
├── lib/
│   └── api.ts                # Axios API client configurations & interceptors
├── types/
│   └── index.ts              # Shared TypeScript interfaces and types
└── .env.local                # Environment configurations
```

---

## ⚙️ Getting Started (Local Development)

> ⚠️ **Prerequisites:** To ensure the frontend functions correctly, all backend services must be up and running locally or remotely.

### 🔢 Recommended Microservices Startup Order

| Step | Service | Port |
|---|---|---|
| 1️⃣ | Config Server | `9000` |
| 2️⃣ | Service Registry (Eureka) | `9001` |
| 3️⃣ | API Gateway | `7000` |
| 4️⃣ | Student Service | Random / `0` |
| 5️⃣ | Program Service | Random / `0` |
| 6️⃣ | Enrollment Service | Random / `0` |
| 7️⃣ | **Webapp (this repo)** | `3000` |

> Backend microservices run on random ports and are accessed dynamically via the **API Gateway** running on port `7000`.

### 1️⃣ Configure Environment Variables

Create a `.env.local` file in the root `webapp/` directory and point it to your API Gateway endpoint:

```env
NEXT_PUBLIC_API_URL=http://localhost:7000
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start the Development Server

```bash
npm run dev
```

The application will be available at **[http://localhost:3000](http://localhost:3000)**.

### ☁️ Production Deployment (GCP)

The application is containerized and deployed to **Google Cloud Run**, sitting behind a **Regional External Application Load Balancer** for public access, scalability, and SSL termination.

```bash
# Example build & deploy flow
docker build -t gcr.io/visun-gcp-lab/frontend-webapp .
docker push gcr.io/visun-gcp-lab/frontend-webapp
gcloud run deploy frontend-webapp \
  --image gcr.io/visun-gcp-lab/frontend-webapp \
  --platform managed \
  --region <your-region> \
  --allow-unauthenticated
```

---

## 📄 License

This project was developed as part of the **Enterprise Cloud Architecture** university module (Capstone Project — Alternative Option).
