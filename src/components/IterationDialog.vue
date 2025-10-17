<script setup lang="ts">
import Iteration from "@/app/Iteration"
import AppDate from "@/app/support/AppDate"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ref } from "vue"

const open = ref(false)
const startDate = ref(AppDate.today().toISODateString())
const endDate = ref(AppDate.today().addDays(14).toISODateString())

const emit = defineEmits(['save'])

const saveIteration = () => {
  const iteration = new Iteration({
    id: Date.now(),
    startDate: startDate.value,
    endDate: endDate.value,
  });

  emit('save', iteration);
  open.value = false
};

</script>

<template>
  <Dialog v-model:open="open">
    <DialogTrigger as-child>
      <Button variant="outline">
        Create Iteration
      </Button>
    </DialogTrigger>

    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Create Iteration</DialogTitle>
        <DialogDescription>
          Make iteration here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>

      <div class="grid gap-4 py-4">
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="startDate"
            class="text-right">
            Start Date
          </Label>
          <Input id="startDate"
            type="date"
            class="col-span-3"
            v-model="startDate" />
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="endDate"
            class="text-right">
            End Date
          </Label>
          <Input id="endDate"
            type="date"
            class="col-span-3"
            v-model="endDate" />
        </div>
      </div>

      <DialogFooter>
        <Button type="submit" @click="saveIteration">
          Save
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>