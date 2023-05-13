
function Section({children, id}) {
  return ( 
    <section className="px-4 md:px-16 my-28 md:my-48" id={id}>
      {children}
    </section>
   );
}

export default Section;