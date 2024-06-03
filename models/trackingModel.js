// import mongoose from "mongoose";

// const trackingSchema = mongoose.Schema(
//   {
//     userId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "users",
//       required: true,
//     },
//     foodId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "foods",
//       required: true,
//     },
//     details: {
//       calories: Number,
//       protein: Number,
//       carbohydrate: Number,
//       fat: Number,
//       fibre: Number,
//     },
//     eatenDate: {
//       type: String,
//       default: () =>new Date().toLocaleDateString(),
//     },
//     quantity: {
//       type: Number,
//       min: 1,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//     versionKey: false,
//   }
// );

// const trackingModel = mongoose.model("trackings", trackingSchema);

// export default trackingModel;
// import mongoose from "mongoose";

// // Helper function to get the current date in IST timezone
// const getISTDate = () => {
//   const istOffset = 5.5 * 60 * 60 * 1000; // IST offset in milliseconds
//   const now = new Date();
//   const istDate = new Date(now.getTime() + istOffset);
//   return istDate.toISOString().split('T')[0];
// };

// const trackingSchema = mongoose.Schema(
//   {
//     userId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "users",
//       required: true,
//     },
//     foodId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "foods",
//       required: true,
//     },
//     details: {
//       calories: Number,
//       protein: Number,
//       carbohydrate: Number,
//       fat: Number,
//       fibre: Number,
//     },
//     eatenDate: {
//       type: String,
//       default: getISTDate,
//     },
//     quantity: {
//       type: Number,
//       min: 1,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//     versionKey: false,
//   }
// );

// const trackingModel = mongoose.model("trackings", trackingSchema);

// export default trackingModel;
import mongoose from "mongoose";
import moment from "moment";

const trackingSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    foodId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "foods",
      required: true,
    },
    details: {
      calories: Number,
      protein: Number,
      carbohydrate: Number,
      fat: Number,
      fibre: Number,
    },
    eatenDate: {
      type: String,
      default: () => moment().format('DD-MM-YYYY'),
    },
    quantity: {
      type: Number,
      min: 1,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const trackingModel = mongoose.model("trackings", trackingSchema);

export default trackingModel;

