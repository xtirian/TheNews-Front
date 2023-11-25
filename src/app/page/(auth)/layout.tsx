export default function CadastroMenuLayout({
  children, //says if it'll be a page or nested layout
}: {
  children?: React.ReactNode;
}) {
  return (
    <section>
      {/* TODO: PUT THE children FOR LOGIN E SIGN AREA */}

      {children}
    </section>
  );
}
