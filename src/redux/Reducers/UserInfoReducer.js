const initialState = {
  userInfo: {
    success: true,
    data: {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFiYmE4YmM3MjQyMTQ4M2VjNDhmOTUiLCJlbWFpbCI6Im1lQGhvc3NlaW4ubGluayIsImlzcyI6InVwbGF3LXdlYiIsImV4cCI6MTIwMDAwMDAwMDAwMCwiaWF0IjoxNjMwNzQ3Mzc1fQ.-uRPSF3RO7Wc5WFI1HxUkB83zP5Gfd1NTp8DtQ2ltYE",
      customer: {
        nationalNumber: "0012345678",
        nationalCardImage:
          "http://localhost:3000/uploads/image/611bba8bc72421483ec48f95/image-1630591353636-psycho party.jpg",
        fullName: "حسین محمدی پور",
        mobileNumber: "09210491217",
        email: "me@hossein.link",
        createdAt: "2021-08-17T13:32:59.671Z",
        updatedAt: "2021-09-02T14:06:04.948Z",
        skills: [],
        socialMedia: [
          {
            _id: "611bbc6c7b398b4bd6893ab8",
            where: "instagram",
            url: "instagram.com/hosseinDotLink",
          },
        ],
        isActive: true,
        verified: {
          mobileNumber: true,
          email: true,
          nationalCardImage: false,
          authentication: false,
        },
        type: "freelancer",
        image:
          "http://localhost:3000/uploads/profile-images/611bba8bc72421483ec48f95-image-1630591564129-the-only-rule-is-there-are-no-rules.jpg",
        thumbnail:
          "http://localhost:3000/uploads/profile-images/611bba8bc72421483ec48f95-image-1630591564129-the-only-rule-is-there-are-no-rules-thumbnail.jpg",
      },
    },
    msg: null,
  },
};

export const userInfoReducer = (state = initialState, action) => {
  return state;
};
