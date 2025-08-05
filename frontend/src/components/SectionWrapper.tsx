function SectionWrapper({ children }: any) {
  return (
    <div className="max-w-[90rem] lg:px-10 md:px-7 px-5 mx-auto w-full">
      {children}
    </div>
  );
}

export default SectionWrapper;
