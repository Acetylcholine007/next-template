export interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = (props) => {
  const { children } = props;

  return <div className={`h-screen w-screen overflow-hidden`}>{children}</div>;
};

export default AppLayout;
