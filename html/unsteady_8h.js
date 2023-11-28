var unsteady_8h =
[
    [ "UnsStatCffData", "struct_uns_stat_cff_data.html", "struct_uns_stat_cff_data" ],
    [ "CFF_NAME_MAX_SIZE", "unsteady_8h.html#ad81c922ce10bc302ad65553805cd786e", null ],
    [ "SV_CFF_MEAN", "unsteady_8h.html#a0cab69e4e7fcec1f196fb8ea14e3323e", null ],
    [ "SV_CFF_RMS", "unsteady_8h.html#a581a0bd741f8081e6487110cb1f79486", null ],
    [ "Temporal_Extraploations", "unsteady_8h.html#a6a01c36c6ed5bae70f2a85263641031b", [
      [ "CONSTANT_EXTRAPOLATION", "unsteady_8h.html#a6a01c36c6ed5bae70f2a85263641031ba6443e837b1faddbc2988291e820d3805", null ],
      [ "FIRST_ORDER_LINEAR_EXTRAPOLATION", "unsteady_8h.html#a6a01c36c6ed5bae70f2a85263641031bade136a0fde4015606b8139bf24dbc694", null ],
      [ "SECOND_ORDER_LINEAR_EXTRAPOLATION", "unsteady_8h.html#a6a01c36c6ed5bae70f2a85263641031ba7ea86a3dc0897c9476ffa68ffc5d36ac", null ],
      [ "QUADRATIC_EXTRAPOLATION", "unsteady_8h.html#a6a01c36c6ed5bae70f2a85263641031baaf7a17755eae83ca66f977d4f8082a27", null ],
      [ "LEGACY_EXTRAPOLATION", "unsteady_8h.html#a6a01c36c6ed5bae70f2a85263641031baa9a74da93886cc46654f34d480cf4ecf", null ]
    ] ],
    [ "Time_Step_Size_CFL_TYPES", "unsteady_8h.html#a8d3d2706e921fab4601bbd5f9b34012f", [
      [ "ACOUSTIC_CFL", "unsteady_8h.html#a8d3d2706e921fab4601bbd5f9b34012fa45fe28b0b4ed9c80d5a882aafdb6f2ba", null ],
      [ "FLUX_BASED_CFL", "unsteady_8h.html#a8d3d2706e921fab4601bbd5f9b34012fa9b26c53ad856e4f289e3415baab2deb8", null ],
      [ "CONVECTIVE_CFL", "unsteady_8h.html#a8d3d2706e921fab4601bbd5f9b34012fa10b5c6d6da26c87d2509d78c56309570", null ],
      [ "VISCOUS_CFL", "unsteady_8h.html#a8d3d2706e921fab4601bbd5f9b34012fadf0d5ec2b4bc0a8d4e2af9c04487ca3d", null ],
      [ "FLOW_BASED_CFL", "unsteady_8h.html#a8d3d2706e921fab4601bbd5f9b34012fa948af360c352dbcd6f329109f8c9221d", null ]
    ] ],
    [ "Time_Step_Size_Methods", "unsteady_8h.html#a6a50e9d318e8f18e3670eb569e021007", [
      [ "FIXED_DT", "unsteady_8h.html#a6a50e9d318e8f18e3670eb569e021007ac3277af6f15579b1b3b2061b9d5b248b", null ],
      [ "ADAPTIVE_UDF_BASED_DT", "unsteady_8h.html#a6a50e9d318e8f18e3670eb569e021007a3d2b59cd610eb85cd9e99f8bdef4467a", null ],
      [ "ADAPTIVE_CFL_BASED_DT", "unsteady_8h.html#a6a50e9d318e8f18e3670eb569e021007a1a70323dd7942a8f144e009eef37fcdf", null ],
      [ "ADAPTIVE_ERROR_BASED_DT", "unsteady_8h.html#a6a50e9d318e8f18e3670eb569e021007a4509af2d74508e57d49ae8c2aa176e0f", null ],
      [ "ADAPTIVE_MULTIPHASE_SPECIFIC_DT", "unsteady_8h.html#a6a50e9d318e8f18e3670eb569e021007a7af07b2bb98e8317a08b16bf99ed6a34", null ]
    ] ],
    [ "Time_Step_Size_Options", "unsteady_8h.html#adb6dd1e1efed947287d44c13eecff654", [
      [ "MIN_ALLOWED_DT", "unsteady_8h.html#adb6dd1e1efed947287d44c13eecff654aa295fd97cac2061c066f5c77817bf78a", null ],
      [ "WEIGHTED_AVERAGE_DT", "unsteady_8h.html#adb6dd1e1efed947287d44c13eecff654a6c2102f6a8ca12ffe8c8fdd5403448fb", null ],
      [ "MAX_ALLOWED_DT", "unsteady_8h.html#adb6dd1e1efed947287d44c13eecff654a9c2124cd5a881c4523883d45d7fa259a", null ]
    ] ],
    [ "Accumulate_Statistics", "unsteady_8h.html#ac0d87624136b4883e724dbcf5731ae84", null ],
    [ "Accumulate_Statistics_Each_CFF", "unsteady_8h.html#a5059fbde26dc3c4c5f70941ac95e47c9", null ],
    [ "AssignCFFUnsteady", "unsteady_8h.html#a2390205144f896c12c0cf64e6c70ae57", null ],
    [ "Compute_dt_increment", "unsteady_8h.html#aa978d726c3cdc5f1cc19f06286b44e36", null ],
    [ "Compute_dt_increment_mp_mfluid", "unsteady_8h.html#a3ea7d52435f4c7bdb26f9079d31ed00e", null ],
    [ "Compute_Fluid_Timestep_Size", "unsteady_8h.html#a5d09c60843f49a243f8aef8c385d8da8", null ],
    [ "Compute_Fluid_Timestep_Size_Based_on_CFL", "unsteady_8h.html#a5a4a66ef19e04276aaf8192a1e9eec44", null ],
    [ "Convert_Unsteady_Statistics", "unsteady_8h.html#a0186f0e5cf1ae7ad013a4edc3d51a935", null ],
    [ "Fill_Unsteady_Stat_CFF_Data", "unsteady_8h.html#ab97cee0c3681e4ee7740e670a1881443", null ],
    [ "Init_Free_Unsteady_Stat_CFF_Storage", "unsteady_8h.html#a66d2ba9e991dfccdfce38602900d51fc", null ],
    [ "Initialize_Statistics", "unsteady_8h.html#a0ccf74d026b0e4068c4f5dce4c06bb8a", null ],
    [ "Patch_Old_Time_Levels", "unsteady_8h.html#aef126c10eb03f01a97b11a5673ac054b", null ],
    [ "Previous_Time_Level_Svars", "unsteady_8h.html#ac91a1c11542b8affce840e6a382406d3", null ],
    [ "Set_Delta_Time_Sampled", "unsteady_8h.html#a97af672b5cbf53f87840fc1eb56d002e", null ],
    [ "store_cff", "unsteady_8h.html#ab6f825c1e5a26a5f9513f314be018d6c", null ],
    [ "Time_Extrapolate_Coeff", "unsteady_8h.html#a34a8942fe3e0d02c8df6ba6b24409d54", null ],
    [ "unsteady_statistics", "unsteady_8h.html#ab122133a8dd88a66669cc69b59096aa1", null ],
    [ "Update_Old_Time_Levels", "unsteady_8h.html#a2adcf914023845887590cb44935f14a5", null ],
    [ "cffMap", "unsteady_8h.html#a3776570a58892a3a07288161d7cb072e", null ],
    [ "cffNameIndexLen", "unsteady_8h.html#ad3fa9187d99fd3a412700f811a13e832", null ],
    [ "dt_factor", "unsteady_8h.html#a614a5f28e2dd345563a4de8bbc47d22a", null ],
    [ "dt_factor_M1", "unsteady_8h.html#ab829639fb0c069c58344b38286915d26", null ],
    [ "dt_factor_M2", "unsteady_8h.html#a555aa3a529a8f19a1b6bf4ea6bd0aacb", null ],
    [ "dt_factor_n", "unsteady_8h.html#a074f44d957e1d420e972605cf01ca4dc", null ]
];