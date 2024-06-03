// import trackingModel from "../models/trackingModel.js";

// const track = async (req, res) => {
//   let trackData = req.body;

//   try {
//     let data = await trackingModel.create(trackData);
//     res.status(201).send({ message: "Food Added" });
    
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({ message: "Some problem in getting food" });
//   }
// };

// const foodeaten = async (req, res) => {
//   let userid = req.params.userid;
//   let date = new Date(req.params.date);
//   let strDate = new Date(date).toISOString().split('T')[0]; 
// console.log(strDate)
//   try {
//     let foods = await trackingModel
//       .find({ userId: userid, eatenDate: strDate })
//       .populate("userId")
//       .populate("foodId");

//     res.send(foods);
//     console.log(foods)
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({ message: "Some problem in getting food" });
//   }
// };

// export default { track, foodeaten };
// import trackingModel from "../models/trackingModel.js";

// const track = async (req, res) => {
//   let trackData = req.body;

//   try {
//     let data = await trackingModel.create(trackData);
//     res.status(201).send({ message: "Food Added" });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({ message: "Some problem in getting food" });
//   }
// };

// const foodeaten = async (req, res) => {
//   let userid = req.params.userid;
//   let date = new Date(req.params.date);
//   let strDate = new Date(date).toISOString().split('T')[0];
//   console.log(strDate);
//   try {
//     let foods = await trackingModel
//       .find({ userId: userid, eatenDate: strDate })
//       .populate("userId")
//       .populate("foodId");

//     res.send(foods);
//     console.log(foods);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({ message: "Some problem in getting food" });
//   }
// };

// export default { track, foodeaten };
import trackingModel from "../models/trackingModel.js";
import moment from "moment";

// Helper function to get the date in IST timezone and format it to DD-MM-YYYY
const getFormattedISTDate = (date = new Date()) => {
  const utcOffset = date.getTimezoneOffset() * 60000; // Convert minutes to milliseconds
  const istOffset = 5.5 * 60 * 60 * 1000; // IST offset in milliseconds
  const istDate = new Date(date.getTime() + utcOffset + istOffset);
  return moment(istDate).format('DD-MM-YYYY');
};

const track = async (req, res) => {
  let trackData = req.body;
  trackData.eatenDate = getFormattedISTDate(); // Set the eatenDate in IST format

  try {
    let data = await trackingModel.create(trackData);
    res.status(201).send({ message: "Food Added" });
  } catch (error) {
    console.error("Error adding food:", error); // Improved error logging
    res.status(500).send({ message: "Some problem in getting food" });
  }
};

const foodeaten = async (req, res) => {
  let userid = req.params.userid;
  let date = req.params.date;
  let formattedDate = moment(date, 'DD-MM-YYYY').format('DD-MM-YYYY');

  console.log("Searching for food on:", formattedDate); // Log the formatted date

  try {
    let foods = await trackingModel
      .find({ userId: userid, eatenDate: formattedDate })
      .populate("userId")
      .populate("foodId");

    res.send(foods);
  } catch (error) {
    console.error("Error fetching food:", error); // Improved error logging
    res.status(500).send({ message: "Some problem in getting food" });
  }
};

export default { track, foodeaten };

