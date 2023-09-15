import { RoughNotationGroup, RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";


export default function Hero() {
  const { theme } = useTheme();
  const colors = theme === 'light' ? "#8c7851" : '#eebbc3'
  return (
    <div className="flex flex-row justify-center items-start lg:px-40">

      <div className="w-full md:w-5/6 mx-auto text-center md:text-left lg:px-20 lg:py-10">
        <RoughNotationGroup show={true}>
            <p className="text-2xl leading-normal md:text-4xl md:leading-loose font-bold text-gray-700 dark:text-gray-200 my-2">
              <RoughNotation color={colors} type="highlight" animationDuration={400}>
                <span className="text-light-secondary dark:text-dark-secondary">Hello</span>
              </RoughNotation>
              , I'm Ren Dzaky.
            </p>
            <span className=" text-4xl md:text-6xl leading-normal md:leading-normal font-bold text-gray-700 dark:text-gray-200 my-2 ">
                Your Friendly Neighborhood {' '} 
                <RoughNotation color={colors} type="crossed-off" animationDuration={400} strokeWidth={5}>Spi-</RoughNotation>
            </span>
            <span className=" text-4xl md:text-6xl leading-normal md:leading-normal font-bold text-gray-700 dark:text-gray-200 my-2 ">
                <RoughNotation color={colors} type="underline" animationDuration={400} strokeWidth={5}>
                    Full-Stack Developer 
                </RoughNotation>{' '}
                on a Mission to Craft Digital Marvels and Bring Your Web Dreams to Life!
            </span>
            <div className="pt-10">
                <span className=" text-xl md:text-2xl font-bold text-gray-700 dark:text-gray-200 my-2 ">
                  <RoughNotation color={colors} type="highlight" animationDuration={400} strokeWidth={5}>
                    <span className="text-light-secondary dark:text-dark-secondary"> 
                      4 years of experiences
                    </span>
                  </RoughNotation>
                    {' '} on Full-Stack Development.
                </span>
            </div>
        </RoughNotationGroup>
      </div>
      {/* Image container */}
    
    </div>
  );
}
