// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract PolyNFT is ERC721A, Ownable {
    mapping(uint256 => string) private _tokenURIs;
    mapping(uint256 => string) private _promptDescription;

    constructor() ERC721A("PolyNFT", "PNFT") {}

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    // TOKEN URI FUNCTIONS

    function setTokenURI(uint256 tokenId, string memory _tokenURI) public onlyOwner {
        _tokenURIs[tokenId] = _tokenURI;
    }
    
    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        return _tokenURIs[tokenId];
    }

    // PROMPT DESCRIPTION FUNCTIONS

    function setPromptDescription(uint256 tokenId, string memory description) public onlyOwner {
        _promptDescription[tokenId] = description;
    }

    function promptDescription(uint256 tokenId) public view returns (string memory) {
        return _promptDescription[tokenId];
    }
}