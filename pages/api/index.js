import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);

    // Process a POST request
    const firstName = req.body.fName;
    console.log(firstName);
    const lastName = req.body.lName;
    const email = req.body.email;
    console.log(firstName, lastName, email);

    var data = {
      members: [
        {
          email_address: email,
          status: "subscribed",
          merge_fields: {
            FNAME: firstName,
            LNAME: lastName,
          },
        },
      ],
    };
    var postData = {
      email_address: email,
      status: "subscribed",
    };
    // Configure headers
    let axiosConfig = {
      headers: {
        authorization:
          "Basic " +
          Buffer.from(
            "randomstring:" + "dd4ca67faa52db4c74154af564c5f265-us20"
          ).toString("base64"),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    const dc = "SERVER EX-US20";

    let mcResponse = await axios.post(
      "https://us12.api.mailchimp.com/3.0/lists/" + dc + "/members",
      postData,
      axiosConfig
    );

    console.log(res.json);
  } else {
    // Handle any other HTTP method
  }
}
