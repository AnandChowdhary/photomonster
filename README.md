# 📷 Photomonster
**WIP:** Photomonster is an app for Android and iOS devices which backs up your photos to the cloud.

## 🖼 How it works
- Download the Photomonster app to your Android device or iPhone
- Open the app and select your preferred cloud storage provider
- Enter your credentials and be patient
- Photomonster will back up all your photos

## 🤔 Why another service?

You can already back up your photos on storage providers such as Google Photos, iCloud Photos, Amazon Photos, Flickr, etc. Photomonster lets you back your photos up to your own server, or using your preferred cloud-based storage service (e.g., AWS S3 or Firebase Storage).

I currently have 2634 photos in my iPhone, ~4 MB/photo. This is how the monthly pricing works out for backing up original quality photos, with a Firebase Storage backend with Photomonster:

| | Google Photos | iCloud Photos | Flickr | Photomonster |
| - | - | - | - | - |
| 1 photo | $0.00 | $0.00 | $0.00 | $0.00 |
| 999 photos | $0.00 ⭐ | $0.00 ⭐ | $0.00 ⭐ | $0.10 😔 |
| 1,500 photos | $0.00* | $0.99 | $5.99 😔 | $0.16 ⭐ |
| 3,000 photos | $0.00* | $0.99 | $5.99 😔 | $0.31 ⭐ |
| 5,000 photos | $1.99 | $0.99 | $5.99 😔 | $0.52 ⭐ |
| 10,000 photos | $1.99 | $0.99 ⭐ | $5.99 😔 | $1.05 ⭐ |
| 20,000 photos | $1.99 ⭐ | $2.99 | $5.99 😔 | $2.10 ⭐ |
| 40,000 photos | $2.99 ⭐ | $2.99 ⭐ | $5.99 😔 | $4.20 |
| 60,000 photos | $9.99 😔 | $9.99 😔 | $5.99 ⭐ | $6.30 |
| 100,000 photos | $9.99 😔 | $9.99 😔 | $5.99 ⭐ | $10.05 😔 |
| 200,000 photos | $9.99 | $9.99 | $5.99 ⭐ | $20.10 😔 |
| 400,000 photos | $9.99 | $9.99 | $5.99 ⭐ | $40.20 😔 |
| 600,000 photos | $9.99 | Unavailable 😔 | $5.99 ⭐ | $60.30 |
| 1,000,000 photos | $99.99 | Unavailable 😔 | $5.99 ⭐ | $101.00 |

\* Google Photos uses Google Drive storage, which is also shared between your files, Gmail, etc., so the 15GB free plan isn't all for photos. Of course, the above pricing should be taken with a grain of salt because you'll be paying for bandwidth when uploading/downloading photos with Photomonster, which is not the case for official apps.

This means that if you're a regular person who has between 0 and 15,000 photos, it makes sense to use Photomonster. If you have 50,000 or more photos, you should go for Flickr.

## 📁 Supported storage providers
- [ ] Firebase Storage
- [ ] Amazon Web Services S3
- [ ] Custom RESTful backend

## 📝 License

- Code: MIT
- Logo: CC-BY-SA 4.0
- Icon: [Camera](https://thenounproject.com/term/camera/1967624) by Jafar from [the Noun Project](https://thenounproject.com)