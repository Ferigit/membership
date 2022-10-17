export default function Layout({ children }: any) {
  return (
    <div className="layout-content">
      <main>{children}</main>
    </div>
  );
}
