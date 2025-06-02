# Node.js App with CI/CD using GitHub Actions + Nginx Reverse Proxy on AWS EC2 + Custom Domain + SSL (Let's Encrypt)

A real-world Node.js application deployment with CI/CD pipeline, running behind Nginx reverse proxy, using a custom domain, and secured with HTTPS using Let's Encrypt SSL.

## 🧰 Tools Used

| Purpose | Tech Used |
|---------|-----------|
| App | Node.js (Express) |
| DevOps Tools | GitHub Actions, Nginx |
| Hosting | AWS EC2 Ubuntu |
| Security | Let's Encrypt SSL (Certbot) |
| Domain | Freenom / GoDaddy / Namecheap |

## 📋 Project Structure

```
node-nginx-deploy/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── index.js
├── package.json
└── README.md
```

## 🚀 Features

- Node.js Express application
- Automated deployment with GitHub Actions
- Nginx reverse proxy configuration
- SSL certificate with Let's Encrypt
- Custom domain setup
- PM2 process management

## 🔧 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/Saifudheenpv/node-nginx-deploy.git
cd node-nginx-deploy
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Application
```bash
npm start
```

## 🌐 Deployment

The application is automatically deployed to AWS EC2 when changes are pushed to the main branch. The deployment process includes:

1. GitHub Actions workflow triggers on push to main
2. SSH into EC2 instance
3. Pull latest code
4. Install dependencies
5. Restart application with PM2

## 🔒 Security

- HTTPS enabled with Let's Encrypt SSL
- Nginx reverse proxy for added security
- Automatic SSL renewal

## 📝 License

This project is licensed under the MIT License.

## 👤 Author

Saifudheenpv

## 🔗 Links

- [Live Demo](https://saifu.store)
- [GitHub Repository](https://github.com/Saifudheenpv/node-nginx-deploy) 