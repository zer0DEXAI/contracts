// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity >=0.5.0;

import './pool/Izer0dexV3PoolImmutables.sol';
import './pool/Izer0dexV3PoolState.sol';
import './pool/Izer0dexV3PoolDerivedState.sol';
import './pool/Izer0dexV3PoolActions.sol';
import './pool/Izer0dexV3PoolOwnerActions.sol';
import './pool/Izer0dexV3PoolEvents.sol';

/// @title The interface for a zer0dex V3 Pool
/// @notice A zer0dex pool facilitates swapping and automated market making between any two assets that strictly conform
/// to the ERC20 specification
/// @dev The pool interface is broken up into many smaller pieces
interface Izer0dexV3Pool is
    Izer0dexV3PoolImmutables,
    Izer0dexV3PoolState,
    Izer0dexV3PoolDerivedState,
    Izer0dexV3PoolActions,
    Izer0dexV3PoolOwnerActions,
    Izer0dexV3PoolEvents
{

}
