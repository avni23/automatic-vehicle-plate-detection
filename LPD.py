import os
import ultralytics
from ultralytics import YOLO
import multiprocessing
from multiprocessing import Process, freeze_support
import os
import torch
torch.cuda.empty_cache()
os.environ["KMP_DUPLICATE_LIB_OK"]="TRUE"

def train():
   model=YOLO("C:\\Users\\Sambhav Mehta\\Desktop\\ANPR_Minor\\last.pt")
   results=model.train(data="C:\\Users\\Sambhav Mehta\\Desktop\\ANPR_Minor\\abc.yaml", epochs=5, batch=4) 

if __name__ == '__main__':  
  freeze_support()
  Process(target=train).start()
                    