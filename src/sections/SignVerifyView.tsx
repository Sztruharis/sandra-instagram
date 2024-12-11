"use client"; // Marks this component for client-side rendering

// Import necessary React hooks and Material-UI components
import { useState } from "react"; // React hook for managing component state
import { Container, TextField, Typography, Button } from "@mui/material"; // Material-UI components for layout, text, input, and actions

// Component for user account verification using a 6-digit code
export default function SignVerifyView() {
  const [verificationCode, setVerificationCode] = useState<string>(""); // State to store the entered verification code

  // Handle changes in the input field for the verification code
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= 6) {
      // Only allow up to 6 digits
      setVerificationCode(value);
    }
  };

  // Handle the verification process (placeholder logic for now)
  const handleVerify = () => {
    // Add verification logic here (e.g., an API call to validate the code)
    console.log("Verification code entered:", verificationCode);
  };

  return (
    <Container
      maxWidth="xs" // Restrict the maximum width for a compact layout
      sx={{
        display: "flex", // Use flexbox for layout
        flexDirection: "column", // Arrange children vertically
        alignItems: "center", // Center-align children horizontally
        mt: 5, // Add margin-top for spacing
        p: 3, // Add padding for inner spacing
        bgcolor: "background.paper", // Use background color from Material-UI theme
        boxShadow: 3, // Add a shadow effect for depth
        borderRadius: 2, // Add rounded corners
      }}
    >
      {/* Title for the verification page */}
      <Typography variant="h5" sx={{ mb: 3 }}>
        Overte svoj účet
      </Typography>

      {/* Instructions for entering the verification code */}
      <Typography variant="body1" sx={{ mb: 3 }}>
        Zadajte 6-miestny kód, ktorý sme vám poslali na email.
      </Typography>

      {/* Input field for the 6-digit verification code */}
      <TextField
        label="Overovací kód" // Label displayed above the input
        type="text" // Input type as text
        value={verificationCode} // Controlled component bound to the state
        onChange={handleChange} // Event handler for input changes
        inputProps={{
          maxLength: 6, // Restrict input to a maximum of 6 characters
          pattern: "[0-9]*", // Accept only numeric input
        }}
        sx={{ mb: 3 }} // Add margin-bottom for spacing
        fullWidth // Make the input field span the full width of the container
      />

      {/* Button to trigger the verification process */}
      <Button
        variant="contained" // Solid button style
        onClick={handleVerify} // Trigger the handleVerify function on click
        fullWidth // Make the button span the full width of the container
      >
        Overiť
      </Button>
    </Container>
  );
}
