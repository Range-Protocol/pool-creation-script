// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;


interface IAlgebraLike {
    function createPool(address tokenA, address tokenB) external returns (address pool);

    function poolByPair(address tokenA, address tokenB) external view returns (address);

    function initialize(uint160 price) external;
}