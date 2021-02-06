import "./style.css";
type Props = {
  loading: boolean;
  children: JSX.Element;
};

function Loader({ loading, children }: Props) {
  if (loading) {
    return (
      <div className="lds-ring">
        <div/>
        <div/>
        <div/>
        <div/>
      </div>
    );
  }
  return children;
}

export default Loader;
