// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;


interface IUniswapLike {
    function createPool(
        address tokenA,
        address tokenB,
        uint24 fee
    ) external;

    function initialize(uint160 sqrtPriceX96) external;

    function getPool(address tokenA, address tokenB, uint24 fee) external view returns (address);
}