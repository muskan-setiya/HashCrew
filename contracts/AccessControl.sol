// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract AccessControl{

    address[] public gen_addr;
    address[] public stud_addr;
    address[] public ver_addr;

    event GrantRole(bytes32 indexed role, address indexed account);

    mapping(bytes32 => mapping(address => bool)) public roles;
    // ADMIN 0xdf8b4c520ffe197c5343c6f5aec59570151ef9a492f2c624fd45ddde6135ec42
    bytes32 private constant ADMIN = keccak256(abi.encodePacked("ADMIN"));
    //GENERATOR 0xddfd3036e1eb6a4af67ba89b65b13a4c179e1ffbf33ac5f3c45ef9007b2cfc0f
    bytes32 private constant GENERATOR = keccak256(abi.encodePacked("GENERATOR"));
    // STUDENT 0xc951d7098b66ba0b8b77265b6e9cf0e187d73125a42bcd0061b09a68be421810
    bytes32 private constant STUDENT = keccak256(abi.encodePacked("STUDENT"));
    //VERIFIER  0xa48c898f5241be426b79d4b5a3c206f9c9a06576e1b72c338c3ec849771d5686
    bytes32 private constant VERIFIER = keccak256(abi.encodePacked("VERIFIER"));

    function getGenAddresses() public view returns (address[] memory) {
        return gen_addr;
    }
    function getStudAddresses() public view returns (address[] memory) {
        return stud_addr;
    }
    function getVerAddresses() public view returns (address[] memory) {
        return ver_addr;
    }

    modifier onlyRole(bytes32 _role){
        require(roles[_role][msg.sender], "Not Authorized!");
        _;
    }

    constructor(){
        _grantRole(ADMIN,msg.sender);
    }
    
    function _grantRole(bytes32 _role, address _account) internal{
        roles[_role][_account]=true;
        emit GrantRole(_role,_account);
        if(_role==GENERATOR){
            gen_addr.push(_account);
        }
        if(_role==STUDENT){
            stud_addr.push(_account);
        }
        if(_role==VERIFIER){
            ver_addr.push(_account);
        }
    }
   
   function grantRole(bytes32 _role,address _account) external onlyRole(ADMIN){
       _grantRole(_role,_account);
   }
}