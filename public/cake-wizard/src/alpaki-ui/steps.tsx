export interface StepModel {
  icon: string;
  text: string;
  code: string;
  selected?: boolean;
}

export interface StepsProps {
  steps: Array<StepModel>;
  stepChanged: (step: StepModel) => void;
}

export function Steps({ steps, stepChanged }: StepsProps) {
  return (
    <div>
      {steps.map((step) => (
        <button key={step.code} onClick={() => stepChanged(step)} className="p-4 mx-1 shadow-md hover:shadow-blue-500/70 shadow-blue-500/50 rounded-full">
          <span
            className="block w-8 h-8 bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${step.icon})` }}
          >
      {step.selected ?? 'yes'}
          </span>
        </button>
      ))}
    </div>
  );
}
