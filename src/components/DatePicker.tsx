import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { SlCalender } from "react-icons/sl";
import DateFormat from "./DateFormat";

export default function DatePickers() {
  const [showDate, setShowDate] = useState(false);

  const handleShow = () => {
    setShowDate(!showDate);
    console.log("ture");
  };

  const datePlan = [
    {
      name: "Specific dates",
    },
    {
      name: "Flexible dates",
    },
  ];

  const [datePlans, setDatePlans] = useState(datePlan);
  const [activeDatePlan, setActiveDatePlan] = useState(0);

  const handleDatePlanClick = (index: number) => {
    setActiveDatePlan(index);
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "100%",
        }}
      >
        <TextField
          //   disabled
          //   id="filled-disabled"
          defaultValue="Weekend trip in the next 6 months"
          sx={{
            width: "100%",
            backgroundColor: "#FFFFFF",
          }}
          onClick={handleShow}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SlCalender />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {showDate ? (
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#FFFFFF",
            border: "1px solid gray",
            padding: 1,
            mt: 2,
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 2,
              }}
            >
              {datePlan.map((item, index) => (
                <Typography
                  key={index}
                  onClick={() => handleDatePlanClick(index)}
                  sx={{
                    borderBottom:
                      activeDatePlan === index ? "1px solid gray" : "",
                    cursor: "pointer",
                  }}
                >
                  {item.name}
                </Typography>
              ))}
            </Box>

            {activeDatePlan === 0 ? (
              <Box>
                <DateFormat />
              </Box>
            ) : (
              <Box></Box>
            )}
          </Box>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
}
