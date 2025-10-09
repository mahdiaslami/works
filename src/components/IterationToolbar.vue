<script setup lang="ts">
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

</script>

<template>
  <div class="flex items-center py-4">
    <Input class="max-w-sm"
      placeholder="Filter" />

    <Button class="ms-auto">Create Iteration</Button>
  </div>
</template>