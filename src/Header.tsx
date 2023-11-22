const Header = ({selectedTeam, teamMemberCount})  => {

    return (
        <header>
            <h1> Team member Allocation </h1>
            <h3>{selectedTeam} has {teamMemberCount} Members</h3>
        </header>
    )
  }
  export default Header;