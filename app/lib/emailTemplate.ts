export const generateEmailTemplate = (
  email: string,
  message: string,
  companyName: string
): string => {
  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
                max-width: 600px; 
                margin: 0 auto; 
                padding: 30px; 
                border-radius: 10px; 
                background-color: #ffffff; 
                border: 1px solid #e5e7eb; 
                box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
      
      <h2 style="color: #0a3d62; 
                 font-size: 24px; 
                 border-bottom: 2px solid #e5e7eb; 
                 padding-bottom: 10px; 
                 margin-bottom: 20px;">
        New Message from NurseBridge Contact Form
      </h2>

      <p style="font-size: 16px; 
                line-height: 1.6; 
                color: #333333;">
        You’ve received a new message from: 
        <strong style="color: #0a3d62;">${email}</strong>
      </p>

      <div style="background-color: #f9fafb; 
                  padding: 18px; 
                  margin: 20px 0; 
                  border-radius: 8px; 
                  border-left: 4px solid #0a3d62;">
        <p style="font-size: 15px; 
                  line-height: 1.5; 
                  color: #374151; 
                  margin: 0;">
          "${message}"
        </p>
      </div>

      <p style="font-size: 15px; 
                color: #555555;">
        You can reply directly to this email to contact the sender:
        <a href="mailto:${email}" 
           style="color: #0a3d62; 
                  text-decoration: none; 
                  font-weight: 600;">
          ${email}
        </a>
      </p>

      <p style="font-size: 14px; 
                color: #9ca3af; 
                margin-top: 30px;">
        This message was sent from the contact form on the 
        <strong>${companyName}</strong> website.
      </p>

      <footer style="text-align: center; 
                     padding-top: 20px; 
                     border-top: 1px solid #e5e7eb; 
                     margin-top: 30px; 
                     font-size: 12px; 
                     color: #9ca3af;">
        &copy; ${new Date().getFullYear()} ${companyName}. All rights reserved.
      </footer>
    </div>
  `
}
