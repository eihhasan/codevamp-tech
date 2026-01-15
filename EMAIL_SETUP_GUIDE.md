# Email Setup Guide for Codevamp Contact Form

## ✅ What's Been Done

Your footer contact form has been updated with full email functionality! Here's what was added:

- ✅ Form state management (name, email, message)
- ✅ Form validation (all fields required)
- ✅ Loading states with spinner animation
- ✅ Success/error message display
- ✅ Form reset after successful submission
- ✅ Disabled state during submission

## 🚀 Quick Setup (5 minutes)

### Option 1: Web3Forms (Recommended - FREE & No Backend Required)

1. **Get Your Access Key**
   - Visit: https://web3forms.com
   - Enter your email: `support@codevamp.tech`
   - Check your email and copy the access key

2. **Add the Access Key**
   - Open `components/footer.tsx`
   - Find line 37: `access_key: "YOUR_WEB3FORMS_ACCESS_KEY"`
   - Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key

3. **Test It!**
   - Run your dev server: `npm run dev`
   - Fill out the contact form
   - Submit and check your email at `support@codevamp.tech`

### Option 2: Using Environment Variables (More Secure)

1. **Create `.env` file** in your project root:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_actual_access_key_here
   ```

2. **Update `footer.tsx`** (line 37):
   ```tsx
   access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
   ```

3. **Add to `.gitignore`** (if not already there):
   ```
   .env
   .env.local
   ```

## 📧 Alternative Email Solutions

### Option A: EmailJS (More Features)

1. Sign up at https://www.emailjs.com
2. Install: `npm install @emailjs/browser`
3. Configure service, template, and public key
4. Update the `handleSubmit` function

### Option B: Custom Backend (Full Control)

If you need more control, you can set up:
- Node.js + Express + Nodemailer
- Serverless functions (Vercel, Netlify)
- Firebase Cloud Functions

## 🎨 Features Included

- **Smart Validation**: All fields are required
- **Loading State**: Shows "TRANSMITTING..." with spinner
- **Success Message**: Green confirmation message
- **Error Handling**: Red error message if something fails
- **Form Reset**: Clears form after successful submission
- **Disabled Inputs**: Prevents multiple submissions

## 🧪 Testing

1. Start your dev server: `npm run dev`
2. Scroll to the footer
3. Fill out all three fields:
   - Entity Identifier (Name)
   - Node Address (Email)
   - Transmission Intent (Message)
4. Click "EXECUTE ASCENT"
5. Watch for the loading state and success message
6. Check `support@codevamp.tech` for the email

## 🔧 Troubleshooting

**Form doesn't submit?**
- Check browser console for errors
- Verify your access key is correct
- Make sure all fields are filled

**No email received?**
- Check spam folder
- Verify the email address in Web3Forms dashboard
- Test with Web3Forms' test mode first

**CORS errors?**
- Web3Forms handles CORS automatically
- If using custom backend, add CORS headers

## 📝 Customization

You can customize the email by modifying the `handleSubmit` function in `footer.tsx`:

```tsx
body: JSON.stringify({
    access_key: "YOUR_KEY",
    subject: `New Contact from ${formData.name}`, // Custom subject
    from_name: formData.name,
    email: formData.email,
    message: formData.message,
    to: "support@codevamp.tech",
    // Add custom fields:
    cc: "another@email.com",
    replyto: formData.email,
}),
```

## 🎯 Next Steps

1. Get your Web3Forms access key
2. Add it to the footer component
3. Test the form
4. (Optional) Move to environment variables for security
5. Deploy and enjoy!

---

**Need Help?** Check the Web3Forms documentation: https://docs.web3forms.com
