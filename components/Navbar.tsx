import { connect } from 'react-redux';
import { toggleDarkMode } from '../src/store/darkmode/darkmode.actions';

interface ConnectedProps {
  darkMode: boolean;
}

interface DispatchProps {
  toggleDarkMode: typeof toggleDarkMode;
}

type Props = ConnectedProps & DispatchProps;

const Navbar = ({ darkMode, toggleDarkMode }: Props) => {
  function darkToggle() {
    toggleDarkMode();
  }
  return (
    <div>
      <button onClick={() => darkToggle()}>Dark Mode</button>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  darkMode: state.darkMode,
});

const mapDispatchToProps = {
  toggleDarkMode: toggleDarkMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
