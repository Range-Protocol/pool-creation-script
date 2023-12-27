// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;


interface IiZumiLike {
    function newPool(
        address tokenX,
        address tokenY,
        uint24 fee,
        int24 currentPoint
    ) external;

    function pool(address tokenX, address tokenY, uint24 fee) external view returns (address);
}