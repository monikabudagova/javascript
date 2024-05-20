# # Задание 1
# a = ''
# b = []
# while len(b) < 10:
#     a = input("Введите имя: ").split()
#     b.append(a)
# for i in range(10):
#     i += 1
#     print(i-1, b[i-1])
# 
# # Задание 2
# print(input('Введите строку: ')[::-1])
# 
# # Задание 3
# a = input('Введите 2 слова: ').split(" ")
# print(a[1], a[0])
# 
# # Задание 4
# a = int(input("Введите число: "))
# if a == abs(a):
#     print("Число положительное")
# elif a != abs(a):
#     print("Число отрицательное")
# 
# # Задание 5
# a = int(input("Введите число от 1 до 7: "))
# match a:
#     case 1:
#         print("Сегодня Понедельник")
#     case 2:
#         print("Сегодня Вторник")
#     case 3:
#         print("Сегодня Среда")
#     case 4:
#         print("Сегодня Четверг")
#     case 5:
#         print("Сегодня Пятница")
#     case 6:
#         print("Сегодня Суббота")
#     case 7:
#         print("Сегодня Восресенье")
#     case _:
#         print("Это число не находится в заданном промежутке (1-7)!")
# 
# Задание 6
a = input("Введите три слова: ").split()
b = input("Введите три слова: ").split()
c = []

for i in range(3):
    for j in range (i):
        if a[i] == b[j]:
            c.append(a[i])
print(f'Совпадения: {c}')
