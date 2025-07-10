import { Box } from "@mui/material";

export default function Map() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%", // Or use a fixed height (e.g., "600px")
        position: "relative", // Critical for child absolute positioning
      }}
    >
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799181496!2d-74.25987571760744!3d40.69767006358627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18b60165%3A0x8b621f8a7a7d28a4!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1633452834502!5m2!1sen!2s"
        style={{
          position: "absolute", // Fill the Box
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: 0,
          borderRadius: "20px",
        }}
        allowFullScreen
        loading="lazy"
      />
    </Box>
  );
}
