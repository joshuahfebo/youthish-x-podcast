import React, { useState, useEffect } from "react";
import { Grid, Radio, RadioGroup, FormControlLabel, Typography, Box } from "@mui/material";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import Stepper, { Step } from "components/ReactBits/Stepper/Stepper";
import routes from "routes";
import footerRoutes from "footer.routes";
import PropTypes from "prop-types";
import UploadData from "Services/UploadData";
/* ------------------ Vote Step ------------------ */
function VoteStep({ title, options, onVote, setStepValid }) {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    setStepValid(selected !== "");
  }, [selected, setStepValid]);

  const handleChange = (e) => {
    setSelected(e.target.value);
    onVote(e.target.value);
  };

  return (
    <Box
      p={4}
      xs={12}
      md={15}
      lg={20}
      sx={{
        maxHeight: "400px",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        px: 1, // hide scrollbar for different browsers
        "&::-webkit-scrollbar": { display: "none" }, // Chrome, Safari
        "-ms-overflow-style": "none", // IE 10+
        "scrollbar-width": "none", // Firefox }}
      }}
    >
      <MKTypography variant="h3" fontWeight={700} mb={3} color="black" textAlign="center">
        {title}
      </MKTypography>

      <RadioGroup onChange={handleChange} value={selected} sx={{ gap: 1 }}>
        {options.map((opt) => (
          <FormControlLabel
            key={opt}
            value={opt}
            control={
              <Radio
                sx={{ color: "rgba(255,255,255,0.6)", "&.Mui-checked": { color: "#c084fc" } }}
              />
            }
            label={<Typography color="black">{opt}</Typography>}
            sx={{
              backdropFilter: "blur(12px)",
              background: "rgba(255,255,255,0.08)",
              borderRadius: "14px",
              px: 2,
              py: 1,
            }}
          />
        ))}
      </RadioGroup>
    </Box>
  );
}

/* ------------------ Welcome Step ------------------ */
function WelcomeStep({ handleName, setStepValid }) {
  const [name, setName] = useState("");

  useEffect(() => {
    handleName(name);
    setStepValid(name.trim() !== "");
  }, [name, handleName, setStepValid]);

  return (
    <Box p={5} textAlign="center">
      <MKTypography variant="h4" fontWeight={800} color="black" mb={2}>
        🎉 TikTok Creator Awards
      </MKTypography>

      <Typography color="rgba(255,255,255,0.8)" fontSize="1.1rem">
        Your voice matters. Vote for the creators shaping culture, trends, and timelines.
      </Typography>

      <MKInput
        placeholder="Enter your name here"
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{
          "& input": {
            color: "#e6e6e6ff",
            fontSize: "1.2rem",
            fontWeight: "bold",
            textAlign: "center",
          },
          "& input::placeholder": { color: "rgba(255, 255, 255, 0.5)" },
        }}
      />

      <Typography mt={3} color="#c084fc">
        Swipe. Vote. Celebrate greatness.
      </Typography>
    </Box>
  );
}

/* ------------------ Celebration Step ------------------ */
function CelebrationStep({ name }) {
  return (
    <Box textAlign="center" p={6}>
      <MKTypography variant="h3" fontWeight={900} color="white">
        Thank you {name} 🎊 Vote Submitted!
      </MKTypography>
      <Typography mt={2} color="rgba(255,255,255,0.85)">
        You just influenced the culture.
      </Typography>
      <Box mt={3} fontSize="3rem" component="div">
        💜
      </Box>
    </Box>
  );
}

/* ------------------ Main Component ------------------ */
export default function ContactUs() {
  const [submit, setSubmit] = useState(false);
  const [votes, setVotes] = useState([]);
  const [name, setName] = useState("");
  const [stepValid, setStepValid] = useState(false);
  const [result, setResult] = useState([]);
  const recordVote = (category, choice) => {
    setVotes((prev) => [...prev.filter((v) => v.category !== category), { category, choice }]);
  };
  useEffect(() => {
    setResult([...votes, { voterName: name }]);
  }, [votes, name]);
  useEffect(() => {
    console.log("Voter Result:", result);
  }, [result]);
  const [existingVotes, setExistingVotes] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("votes");
    if (stored) {
      setExistingVotes(JSON.parse(stored));
    }
  }, []);
  if (existingVotes) {
    const voter = existingVotes.find((v) => v.voterName)?.voterName || "Anonymous";
    const votes = existingVotes.filter((v) => v.category);

    return (
      <Box minHeight="100vh" display="flex" alignItems="center" justifyContent="center" px={2}>
        <MKBox position="fixed" top="0.5rem" width="100%" zIndex={10}>
          <DefaultNavbar routes={routes} transparent />
        </MKBox>
        <MKBox
          sx={{
            backdropFilter: "blur(25px)",
            background: "rgba(26, 3, 3, 0.15)",
            border: "1px solid rgba(255,255,255,0.25)",
            borderRadius: "28px",
            boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
            p: 5,
            maxWidth: 600,
            width: "100%",
          }}
        >
          <MKTypography variant="h3" fontWeight={900} textAlign="center" color="black" mb={2}>
            😌 NICE TRY {voter}
          </MKTypography>

          <Typography textAlign="center" color="black" mb={3} fontSize="1.1rem">
            But you already voted. Here’s what you chose:
          </Typography>

          <Box display="flex" flexDirection="column" gap={1.5}>
            {votes.map((v, i) => (
              <Box
                key={i}
                sx={{
                  background: "rgba(0, 0, 0, 0.2)",
                  borderRadius: "14px",
                  px: 2,
                  py: 1,
                }}
              >
                <Typography color="black" fontWeight={600}>
                  {v.category}
                </Typography>
                <Typography color="black" fontSize="0.95rem">
                  → {v.choice}
                </Typography>
              </Box>
            ))}
          </Box>

          <Typography mt={4} textAlign="center" color="rgba(0,0,0,0.7)">
            Democracy respected 🗳️
          </Typography>
        </MKBox>
      </Box>
    );
  }

  return (
    <>
      <style>{`html, body { background: linear-gradient(135deg, #2b1055, #5f2c82, #41295a); }`}</style>

      <MKBox position="fixed" top="0.5rem" width="100%" zIndex={10}>
        <DefaultNavbar routes={routes} transparent />
      </MKBox>

      <Grid container minHeight="100vh" alignItems="center" justifyContent="center" px={2}>
        <Grid item xs={12} md={15} lg={20}>
          <MKBox
            sx={{
              backdropFilter: "blur(22px)",
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: "28px",
              boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
              overflow: "hidden",
            }}
          >
            <Stepper
              initialStep={1}
              backButtonText="Previous"
              nextButtonText="Let's Go"
              disableStepIndicators
              nextButtonDisabled={!stepValid}
              onFinalStepCompleted={() => {
                setSubmit(true);
              }}
            >
              <Step label="Welcome">
                <WelcomeStep handleName={setName} setStepValid={setStepValid} />
              </Step>
              <Step label="Male Creator">
                <VoteStep
                  title="Male Content Creator of the Year"
                  options={[
                    "talejr0",
                    "__trench._",
                    "casualkidd",
                    "its.kidd_malon",
                    "ayman.frz",
                    "ybcash4",
                    "fiasco28",
                    "jpgs.otk",
                    "teccaaaa.10",
                    "christian._j5",
                  ]}
                  onVote={(v) => recordVote("Male Creator", v)}
                  setStepValid={setStepValid} // ✅ pass the function
                />
              </Step>
              <Step label="Female Creator">
                <VoteStep
                  title="Female Content Creator of the Year"
                  options={[
                    "iamdivinemarvel",
                    "itz_smar7",
                    "his._lyssa",
                    "__.bhokeyyy",
                    "ms.janevictor",
                    "jo.ba.sa._",
                    "6a2b0",
                    "reener67",
                    "_.dor.cas",
                    "_____.call_me.g",
                    "iam_.nan3y",
                    "all.abt_lime",
                    "yours.dee",
                    "timah_vibez",
                  ]}
                  onVote={(v) => recordVote("Female Creator", v)}
                  setStepValid={setStepValid} // ✅ pass the function
                />
              </Step>
              <Step label="Rising Female">
                <VoteStep
                  title="Rising Female Content Creator"
                  options={[
                    "__beybee",
                    "michelle_mmary",
                    "saniarealm",
                    "xoxo_noreen",
                    "__b.ella._",
                    "_ms.__.reenah",
                    "_ms.hailey2",
                    "........snips",
                    "gilloh._",
                    "_kaseza_",
                    "joanmary__",
                  ]}
                  onVote={(v) => recordVote("Rising Female", v)}
                  setStepValid={setStepValid} // ✅ pass the function
                />
              </Step>
              <Step label="Rising Male">
                <VoteStep
                  title="Rising Male Content Creator"
                  options={[
                    "uncle.sal88",
                    "johnny_chacha",
                    "____marioh",
                    "maui_innit",
                    "clementpail709",
                    "a.n.u.a.r_._",
                    "somezz.zz",
                    "rio.7l",
                    "jaduwrld_",
                    "caxper064",
                  ]}
                  onVote={(v) => {
                    recordVote("Rising Male", v);
                  }}
                  setStepValid={setStepValid} // ✅ pass the function
                />
              </Step>
              <Step label="Most Influential Creator">
                <VoteStep
                  title="Most Influential Digital Creator"
                  options={[
                    "casualkidd",
                    "ayman.frz",
                    "iamdivinemarvel",
                    "itz_smar7",
                    "______.call_me.g",
                    "___trench._",
                    "fiasco28",
                    "its.kidd_malon",
                    "christian_.j5",
                    "timah_vibez",
                  ]}
                  onVote={(choice) => recordVote("mostInfluentialDigitalCreator", choice)}
                  setStepValid={setStepValid} // ✅ pass the function
                />
              </Step>
              <Step label="Best Video Creativity">
                <VoteStep
                  title="Best Video Creativity"
                  options={[
                    "___trench._",
                    "its.kidd_malon",
                    "casualkidd",
                    "christian_.j5",
                    "jpgs.otk",
                    "talejr0",
                  ]}
                  onVote={(choice) => recordVote("bestVideoCreativity", choice)}
                  setStepValid={setStepValid} // ✅ pass the function
                />
              </Step>
              <Step label="Done">
                <CelebrationStep name={name} />
              </Step>
            </Stepper>
            {submit && <UploadData data={result} />}
          </MKBox>
        </Grid>
      </Grid>

      <MKBox mt={10}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}
VoteStep.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onVote: PropTypes.func.isRequired,
  setStepValid: PropTypes.func.isRequired,
};
WelcomeStep.propTypes = {
  handleName: PropTypes.func.isRequired,
  setStepValid: PropTypes.func.isRequired,
};
CelebrationStep.propTypes = { name: PropTypes.string.isRequired };
