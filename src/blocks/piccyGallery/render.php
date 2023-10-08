<?php
    $block_wrapper_attributes = get_block_wrapper_attributes();
?>

<div <?= $block_wrapper_attributes; ?> >
    <div class="gallery-thumbnails">
        <?= $content; ?>
    </div>
    <div>
        <img class="image-preview" />
    </div>
</div>