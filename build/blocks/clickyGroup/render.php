<?php 
    $block_gap = convert_custom_properties($attributes['style']['spacing']['blockGap'] ?? 0);
    $block_wrapper_attributes = get_block_wrapper_attributes([
        'style' => 'gap: ' . $block_gap . '; justify-content: ' .$attributes['justifyContent']
    ]);
?>
<div <?= $block_wrapper_attributes; ?>>
    <?= $content; ?>
</div>