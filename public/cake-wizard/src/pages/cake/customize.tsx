import { Card, ContentContainer } from "../../alpaki-ui";
import { Steps, StepModel } from "../../alpaki-ui/steps";
import { useBackground } from "../../hooks/useBackground";
import { useTitle } from "../../hooks/useTitle";
import Image from "./cake-background.jpg";
import Certificate from "./icons/certificate.png";
import Calendar from "./icons/calendar.png";
import { useState, useMemo } from "react";
import { nextTick } from "process";

const steps: Array<StepModel> = [
  { text: "Ustawienia", icon: Certificate, code: "settings" },
  { text: "Data", icon: Calendar, code: "date" },
];

export default function CustomizeCake() {
  useBackground(Image);
  useTitle("Customize your cake");
  const [step, setStep] = useState(steps[0]);

  const usedSteps = useMemo(() => {
    return steps.map((s) => ({
      ...s,
      selected: s.code === step.code,
    }));
  }, [step]);

  return (
    <ContentContainer>
      <>
        <Card>
          <Steps
            steps={usedSteps}
            stepChanged={(step) => {
              const nextStep = steps.find((s) => s.code === step.code);
              if (nextStep) {
                setStep(nextStep);
              }
            }}
          ></Steps>
          <div>
            {step.code}
          </div>
        </Card>
      </>
    </ContentContainer>
  );
}
