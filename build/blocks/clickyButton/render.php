<?php
    $label_exists = $attributes['labelText'] ?? null;
    $block_wrapper_attributes = get_block_wrapper_attributes([
        'style' => 'display: '. ($label_exists ? 'block' : 'none')
    ]);
    if ($attributes['linkedPost'] ?? null) {
        $post_uri = get_permalink($attributes['linkedPost']);
    }
?>
<a href="<?= $post_uri ?? '#'; ?>" <?= $block_wrapper_attributes; ?>>
    <?= $attributes['labelText']; ?>
</a>