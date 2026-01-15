# 🚀 Quick Start - Email Setup

## Step 1: Get Your Access Key (2 minutes)

1. Go to: **https://web3forms.com**
2. Enter: `support@codevamp.tech`
3. Click "Get Access Key"
4. Check your email and copy the key

## Step 2: Add the Key (Choose ONE method)

### Method A: Direct (Quick Test)
Open `components/footer.tsx` and replace on line 38:
```tsx
access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "paste_your_key_here",
```

### Method B: Environment Variable (Recommended)
1. Create `.env` file in project root:
```env
VITE_WEB3FORMS_ACCESS_KEY=your_actual_key_here
```

2. Restart dev server:
```bash
npm run dev
```

## Step 3: Test It!

1. Open your website
2. Scroll to footer
3. Fill the form:
   - Name: Test User
   - Email: your@email.com
   - Message: Testing the contact form
4. Click "EXECUTE ASCENT"
5. Watch for success message
6. Check `support@codevamp.tech` inbox

## ✅ What You'll See

- **While submitting**: Button shows "TRANSMITTING..." with spinner
- **On success**: Green message "Transmission successful!"
- **On error**: Red message with error details
- **Form clears** automatically after success

## 📧 Email Format

You'll receive emails at `support@codevamp.tech` with:
- **Subject**: New Contact Form Submission from [Name]
- **From**: [User's Email]
- **Message**: [User's Message]
- **Reply-To**: [User's Email] (click reply to respond directly)

## 🔒 Security Note

If using `.env` file, make sure it's in `.gitignore`:
```
.env
.env.local
```

## Need Help?

- Web3Forms Docs: https://docs.web3forms.com
- Check browser console for errors
- Verify all form fields are filled
- Check spam folder for test emails

---

**That's it!** Your contact form is ready to receive messages at `support@codevamp.tech` 🎉
