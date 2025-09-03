

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center gap-2">
            <img 
              src="/lovable-uploads/7104d558-8d12-4a6a-a1f6-20e7316d2530.png" 
              alt="Kuwait Oil Company Logo" 
              className="h-12 w-auto"
            />
            <div className="text-center">
              <h1 className="text-xl font-bold text-primary-foreground">
                KOC PPE Recycling Initiative
              </h1>
              <p className="text-sm text-primary-foreground/80">
                From Protection to Purpose
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;