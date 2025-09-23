"use client";
import { cn } from "../lib/utils";
import { useState } from "react";

export function ArcTimeline(props) {
  const {
    className,
    children,
    data,
    arcConfig = {},
    defaultActiveStep = {},
    ...restProps
  } = props;

  const {
    circleWidth = 5000,
    angleBetweenMinorSteps = 0.35,
    lineCountFillBetweenSteps = 10,
    boundaryPlaceholderLinesCount = 50,
  } = arcConfig;

  const {
    time: defaultActiveTime = data[0].time,
    stepIndex: defaultActiveStepIndex = 0,
  } = defaultActiveStep || {};

  const [circleContainerRotateDeg, setCircleContainerRotateDeg] = useState(
    () => {
      let count = 0;
      for (const timelineItem of data) {
        if (timelineItem.time === defaultActiveTime) {
          count += defaultActiveStepIndex;
          break;
        } else {
          count += timelineItem.steps.length;
        }
      }
      return (
        -1 * count * angleBetweenMinorSteps * (lineCountFillBetweenSteps + 1) -
        angleBetweenMinorSteps * boundaryPlaceholderLinesCount
      );
    }
  );

  return (
    <div
      {...restProps}
      className={cn("relative h-[500px] w-full overflow-hidden", className)}
    >
      <div
        style={{
          transform: `translateX(-50%) rotate(${circleContainerRotateDeg}deg)`,
          width: `${circleWidth}px`,
        }}
        className="absolute left-1/2 top-28 aspect-square origin-center rounded-full transition-all duration-500 ease-in-out"
      >
        {data.map((line, lineIndex) => {
          return (
            <div key={`${lineIndex}`}>
              {line.steps.map((step, stepIndex) => {
                const angle =
                  angleBetweenMinorSteps *
                    (lineCountFillBetweenSteps + 1) *
                    (data
                      .slice(0, lineIndex)
                      .map((item) => item.steps.length)
                      .reduce((prev, current) => prev + current, 0) +
                      stepIndex) +
                  angleBetweenMinorSteps * boundaryPlaceholderLinesCount;

                const isLastStep =
                  lineIndex === data.length - 1 &&
                  stepIndex === line.steps.length - 1;
                const isFirstStep = lineIndex === 0 && stepIndex === 0;
                const isActive =
                  Math.abs(angle + circleContainerRotateDeg) < 0.01;

                return (
                  <div key={`${lineIndex}-${stepIndex}`}>
                    {isFirstStep && (
                      <PlaceholderLines
                        isFirstStep={true}
                        isLastStep={false}
                        angle={angle}
                        angleBetweenMinorSteps={angleBetweenMinorSteps}
                        lineCountFillBetweenSteps={lineCountFillBetweenSteps}
                        boundaryPlaceholderLinesCount={boundaryPlaceholderLinesCount}
                        lineIndex={lineIndex}
                        stepIndex={stepIndex}
                        circleWidth={circleWidth}
                        circleContainerRotateDeg={circleContainerRotateDeg}
                      />
                    )}

                    <div
                      className={cn(
                        "absolute left-1/2 top-0 -translate-x-1/2 cursor-pointer transition-all duration-200",
                        isActive ? "h-[210px] w-[2px]" : "h-[130px] w-[1.5px]"
                      )}
                      style={{
                        transformOrigin: `50% ${circleWidth / 2}px`,
                        transform: `rotate(${angle}deg)`,
                      }}
                      onClick={() => {
                        setCircleContainerRotateDeg(-1 * angle);
                      }}
                    >
                      <div
                        className={cn(
                          "h-full w-full transition-colors duration-200",
                          isActive
                            ? "bg-[var(--step-line-active-color,#888888)] dark:bg-[var(--step-line-active-color,#9780ff)]"
                            : "bg-[var(--step-line-inactive-color,white)] dark:bg-[var(--step-line-inactive-color,white)]"
                        )}
                        style={{
                          transformOrigin: "center top",
                          transform: `rotate(${-1 * angle - circleContainerRotateDeg}deg)`,
                        }}
                      >
                        <div
                          className={cn(
                            "absolute bottom-0 left-1/2 aspect-square -translate-x-1/2",
                            isActive
                              ? "translate-y-[calc(100%_+_24px)] scale-[2.5] text-[var(--icon-active-color,white)] dark:text-[var(--icon-active-color,white)]"
                              : "translate-y-[calc(100%_+_8px)] scale-[1.5] text-[var(--icon-inactive-color,#a3a3a3)] dark:text-[var(--icon-inactive-color,#a3a3a3)]"
                          )}
                        >
                          {step.icon}
                        </div>

                        <p
                          className={cn(
                            "absolute bottom-0 left-1/2 line-clamp-3 flex w-[240px] -translate-x-1/2 translate-y-[calc(100%_+_73px)] items-center justify-center text-center text-[17px] transition-opacity duration-300 ease-in",
                            "text-[var(--description-color,white)] dark:text-[var(--description-color,white)]",
                            isActive ? "opacity-100" : "opacity-0"
                          )}
                        >
                          {step.content}
                        </p>
                      </div>

                      {stepIndex === 0 && (
                        <div
                          className={cn(
                            "absolute left-1/2 top-0 z-10 -translate-x-1/2 translate-y-[calc(-100%-24px)] whitespace-nowrap",
                            isActive
                              ? "text-2xl font-bold text-[var(--time-active-color,#555555)] dark:text-[var(--time-active-color,#d4d4d4)]"
                              : "text-xl text-[var(--time-inactive-color,#a3a3a3)] dark:text-[var(--time-inactive-color,#a3a3a3)]"
                          )}
                        >
                          {line.time}
                        </div>
                      )}
                    </div>

                    <PlaceholderLines
                      isFirstStep={false}
                      isLastStep={isLastStep}
                      angle={angle}
                      angleBetweenMinorSteps={angleBetweenMinorSteps}
                      lineCountFillBetweenSteps={lineCountFillBetweenSteps}
                      boundaryPlaceholderLinesCount={boundaryPlaceholderLinesCount}
                      lineIndex={lineIndex}
                      stepIndex={stepIndex}
                      circleWidth={circleWidth}
                      circleContainerRotateDeg={circleContainerRotateDeg}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PlaceholderLines(props) {
  const {
    isFirstStep,
    isLastStep,
    angle,
    angleBetweenMinorSteps,
    lineCountFillBetweenSteps,
    boundaryPlaceholderLinesCount,
    lineIndex,
    stepIndex,
    circleWidth,
    circleContainerRotateDeg,
  } = props;

  const getAngle = (index) => {
    if (isFirstStep) {
      return index * angleBetweenMinorSteps;
    } else {
      return angle + (index + 1) * angleBetweenMinorSteps;
    }
  };

  return (
    <>
      {Array(isLastStep || isFirstStep ? boundaryPlaceholderLinesCount : lineCountFillBetweenSteps)
        .fill("")
        .map((_, fillIndex) => {
          const fillAngle = getAngle(fillIndex);
          return (
            <div
              key={`${lineIndex}-${stepIndex}-${fillIndex}`}
              className="absolute left-1/2 top-0 h-[100px] w-[1px] -translate-x-1/2"
              style={{
                transformOrigin: `50% ${circleWidth / 2}px`,
                transform: `rotate(${fillAngle}deg)`,
              }}
            >
              <div
                className="h-full w-full bg-[var(--placeholder-line-color,white)] dark:bg-[var(--placeholder-line-color,white)]"
                style={{
                  transformOrigin: "center top",
                  transform: `rotate(${-1 * fillAngle - circleContainerRotateDeg}deg)`,
                }}
              ></div>
            </div>
          );
        })}
    </>
  );
}
